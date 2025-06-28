// import styles from "./styles.css" with { type: "css" };

class ConfirmExtendedDialog extends HTMLElement {
  #dialog: HTMLDialogElement;
  #confirmButton: HTMLButtonElement;
  #closeButton: HTMLButtonElement;
  #onConfirm: (() => void) | null = null;
  #onCancel: (() => void) | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // Append template content
    const template = document.createElement("template");
    template.innerHTML = ConfirmExtendedDialog.template;
    this.shadowRoot!.append(template.content.cloneNode(true));

    // Get elements
    this.#dialog = this.shadowRoot!.querySelector(".confirm-dialog")!;
    this.#confirmButton = this.shadowRoot!.getElementById(
      "confirm-dialog__actions-confirm"
    ) as HTMLButtonElement;
    this.#closeButton = this.shadowRoot!.getElementById(
      "confirm-dialog__actions-cancel"
    ) as HTMLButtonElement;
  }

  /**
   * Returns the HTML template for the component.
   * @returns {string} The HTML template.
   */
  public static get template(): string {
    return /*html*/ `
      <dialog class="confirm-dialog">
        <link rel="stylesheet" href="../styles/styles.css" type="text/css">
        <form method="dialog">
          <fieldset class="confirm-dialog__header">
            <legend>
              <div class="confirm-dialog__header-icon">
                <svg viewBox="0 0 24 24"><path></path></svg>
              </div>
              <slot name="title" class="confirm-dialog__header-title"></slot>
            </legend>
          </fieldset>
          <fieldset class="confirm-dialog__content">
            <slot name="description" class="confirm-dialog__content-description"></slot>
          </fieldset>
          <fieldset class="confirm-dialog__actions">
            <button type="submit" id="confirm-dialog__actions-confirm">Confirm</button>
            <button type="submit" id="confirm-dialog__actions-cancel" autofocus>Close</button>
          </fieldset>
        </form>
      </dialog>
    `;
  }

  /**
   * Returns the list of observed attributes for the component.
   * @returns {string[]} The list of observed attributes.
   */
  public static get observedAttributes(): string[] {
    return ["icon", "open", "confirm-label", "cancel-label"];
  }

  /**
   * Defines the custom dialog web component in the web browser.
   * @param {string} [name="confirm-dialog"] - The name of the custom element. Default is "confirm-dialog".
   * @example
   * ```ts
   * ConfirmExtendedDialog.defineCustomDialog("custom-dialog");
   * ```
   */
  public static defineCustomDialog(name: string = "confirm-extended-dialog"): void {
    if (!customElements.get(name)) customElements.define(name, ConfirmExtendedDialog);
  }

  /**
   * Lifecycle method - Called when the element is added to the DOM.
   */
  public connectedCallback(): void {
    this._closeButton.addEventListener("click", this.#handleClose);
    this._confirmButton.addEventListener("click", this.#handleConfirm);
  }

  /**
   * Lifecycle method - Called when the element is removed from the DOM.
   * Ensures event listeners are properly removed.
   */
  public disconnectedCallback(): void {
    this._closeButton.removeEventListener("click", this.#handleClose);
    this._confirmButton.removeEventListener("click", this.#handleConfirm);
  }

  /**
   * Called when an observed attribute has been added, removed, updated, or replaced.
   * @param {string} name - The name of the attribute.
   * @param {string | null} oldValue - The old value of the attribute.
   * @param {string | null} newValue - The new value of the attribute.
   */
  public attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void {
    if (oldValue === newValue) return;

    switch (name) {
      case "icon":
        this.#updateIcon(newValue);
        break;
      case "open":
        !newValue ? this.hide() : this.show();
        break;
      case "confirm-label":
        this.#confirmButton.textContent = newValue || "Confirm";
        break;
      case "cancel-label":
        this.#closeButton.textContent = newValue || "Close";
        break;
    }
  }

  /**
   * Opens the custom dialog and displays it on the screen.
   * @example
   * ```ts
   * const dialog = document.getElementById("dialog") as ConfirmExtendedDialog;
   * dialog.show();
   * ```
   */
  public show(): void {
    this._dialog.showModal();
    this._dialog.classList.add("show");
  }

  /**
   * Closes the custom dialog and hides it from the screen.
   * @example
   * ```ts
   * const dialog = document.getElementById("dialog") as ConfirmExtendedDialog;
   * dialog.hide();
   * ```
   */
  public hide(): void {
    this._dialog.classList.remove("show");
  }

  /**
   * Handles the confirmation action.
   * @param {Event} event - The click event.
   * @private
   */
  #handleConfirm = (event: Event): void => {
    event.preventDefault();
    if (this.onConfirm) this.onConfirm();
    this.#handleConfirmClick();
    this.hide();
  };

  /**
   * Handles closing the dialog.
   * @private
   */
  #handleClose = (): void => {
    if (this.onCancel) this.onCancel();
    this.#handleCancelClick();
    this.hide();
  };

  /**
   * Dispatches the confirm event.
   * @private
   */
  #handleConfirmClick() {
    this.dispatchEvent(
      new CustomEvent("confirm", {
        bubbles: true,
        composed: true,
        detail: { isConfirmed: true },
      })
    );
  }

  /**
   * Dispatches the cancel event.
   * @private
   */
  #handleCancelClick() {
    this.dispatchEvent(
      new CustomEvent("cancel", {
        bubbles: true,
        composed: true,
        detail: { isConfirmed: false },
      })
    );
  }

  /**
   * Updates the icon based on the type.
   * @param {string | null} type - The type of the icon.
   * @private
   */
  #updateIcon(type: string | null) {
    const icons = new Map<string, { color: string; path: string }>([
      [
        "success",
        {
          color: "green",
          path: "M9 16.2l-4.2-4.2L3 13l6 6L21 7l-1.8-1.8L9 16.2z",
        },
      ],
      [
        "warning",
        {
          color: "orange",
          path: "M1 21h22L12 2 1 21zm11-6h2v2h-2v-2zm0-6h2v4h-2v-4z",
        },
      ],
      [
        "error",
        {
          color: "red",
          path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-3.59 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-11h-2v6h2v-6zm0 8h-2v2h2v-2z",
        },
      ],
    ]);

    const iconContainer = this.shadowRoot!.querySelector(
      ".confirm-dialog__header-icon svg"
    );
    const pathElement = iconContainer?.querySelector("path");

    if (iconContainer && pathElement) {
      const icon = icons.get(type || "");
      if (icon) {
        iconContainer.setAttribute("fill", icon.color);
        pathElement.setAttribute("d", icon.path);
      } else {
        iconContainer.removeAttribute("fill");
        pathElement.removeAttribute("d");
      }
    }
  }

  /**
   * Gets the icon attribute.
   * @returns {string | null} The icon attribute.
   */
  public get icon(): string | null {
    return this.getAttribute("icon");
  }

  /**
   * Sets the icon attribute.
   * @param {string | null} value - The new value for the icon attribute.
   */
  public set icon(value: string | null) {
    if (value) this.setAttribute("icon", value);
    else this.removeAttribute("icon");
  }

  /**
   * Gets the open attribute.
   * @returns {boolean} The open attribute.
   */
  public get open(): boolean {
    return this.hasAttribute("open");
  }

  /**
   * Sets the open attribute.
   * @param {boolean} value - The new value for the open attribute.
   */
  public set open(value: boolean) {
    if (value) this.setAttribute("open", "");
    else this.removeAttribute("open");
  }

  /**
   * Gets the confirm button label.
   * @returns {string} The confirm button label.
   */
  public get confirmLabel(): string {
    return this.getAttribute("confirm-label") || "Confirm";
  }

  /**
   * Sets the confirm button label.
   * @param {string} value - The new value for the confirm button label.
   */
  public set confirmLabel(value: string) {
    this.setAttribute("confirm-label", value);
  }

  /**
   * Gets the cancel button label.
   * @returns {string} The cancel button label.
   */
  public get cancelLabel(): string {
    return this.getAttribute("cancel-label") || "Cancel";
  }

  /**
   * Sets the cancel button label.
   * @param {string} value - The new value for the cancel button label.
   */
  public set cancelLabel(value: string) {
    this.setAttribute("cancel-label", value);
  }

  /**
   * Protected getter for the dialog element.
   * @protected
   * @returns {HTMLDialogElement} The dialog element.
   */
  protected get _dialog(): HTMLDialogElement {
    return this.#dialog;
  }

  /**
   * Protected getter for the confirm button element.
   * @protected
   * @returns {HTMLButtonElement} The confirm button element.
   */
  protected get _confirmButton(): HTMLButtonElement {
    return this.#confirmButton;
  }

  /**
   * Protected getter for the close button element.
   * @protected
   * @returns {HTMLButtonElement} The close button element.
   */
  protected get _closeButton(): HTMLButtonElement {
    return this.#closeButton;
  }

  /**
   * Gets the current confirm callback.
   * @returns {(() => void) | null} The confirm callback.
   */
  public get onConfirm(): (() => void) | null {
    return this.#onConfirm;
  }

  /**
   * Sets a custom function to be called when the confirm button is clicked.
   * @param {(() => void) | null} callback - The confirm callback.
   * @example
   * ```ts
   * const dialog = document.getElementById("dialog") as ConfirmExtendedDialog;
   * dialog.onConfirm = () => {
   *   console.log("Confirmed!");
   * };
   * ```
   */
  public set onConfirm(callback: (() => void) | null) {
    this.#onConfirm = callback;
  }

  /**
   * Gets the current cancel callback.
   * @returns {(() => void) | null} The cancel callback.
   */
  public get onCancel(): (() => void) | null {
    return this.#onCancel;
  }

  /**
   * Sets a custom function to be called when the cancel button is clicked.
   * @param {(() => void) | null} callback - The cancel callback.
   * @example
   * ```ts
   * const dialog = document.getElementById("dialog") as ConfirmExtendedDialog;
   * dialog.onCancel = () => {
   *   console.log("Cancelled!");
   * };
   * ```
   */
  public set onCancel(callback: (() => void) | null) {
    this.#onCancel = callback;
  }
}

ConfirmExtendedDialog.defineCustomDialog();
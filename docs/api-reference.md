# API Reference

This page documents the core functions and types of the `confirm-extended-dialog` web component.

## Attributes

### `confirm-label`

Customizes the text of the confirmation button. By default, it is `Confirm`.

```html
<confirm-extended-dialog confirm-label="Yes">
  <h1 slot="title">Do you want to continue?</h1>
  <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
```

### `cancel-label`

Customizes the text of the cancel button. By default, it is `Cancel`.

```html
<confirm-extended-dialog cancel-label="No">
  <h1 slot="title">Do you want to continue?</h1>
  <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
```

### `icon`

Customizes the icon to show what kind of confirmation dialog it is. The allowable values are `success`, `warning`, and `error`. By default, there is no icon.

```html
<confirm-extended-dialog icon="warning">
  <h1 slot="title">Do you want to continue?</h1>
  <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
```

### `open`

Allows opening the dialog using the attribute by setting `open="true"`. By default, the dialog is closed.

```html
<confirm-extended-dialog open="true">
  <h1 slot="title">Do you want to continue?</h1>
  <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
```

## Slots

### `title`

The slot for the title of the dialog. You can use any HTML element, but it is recommended to use a heading element like `<h1>` or `<h2>`.

**Example:**

```html
<confirm-extended-dialog>
  <h1 slot="title">Do you want to continue?</h1>
</confirm-extended-dialog>
```

### `description`

The slot for the description of the dialog. You can use any HTML element, but it is recommended to use a paragraph element like `<p>`.

**Example:**

```html
<confirm-extended-dialog>
  <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
```

## Events

### `confirm`

Fired when the confirmation button is clicked. The event does not carry any data.

```js
// When the confirm button is clicked, an alert message is shown
const dialog = document.querySelector("confirm-extended-dialog");
dialog.addEventListener("confirm", () => alert("Hello world!!"));
```

### `cancel`

Fired when the cancel button is clicked. The event does not carry any data.

```js
// When the cancel button is clicked, the dialog is immediately closed and an alert message is shown.
const dialog = document.querySelector("confirm-extended-dialog");
dialog.addEventListener("cancel", () => alert("Goodbye world!!"));
```

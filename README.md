# Confirm Dialog

## Description
Confirm dialog is a web component that displays a dialog box that can be customized in the description to display buttons of *Confirm* and *Cancel*. Finally, the dialog can execute actions after clicking the *Confirm* or *Cancel* button.

## Installation
Download from npm:

```sh
npm i confirm-dialog
```

## Usage

### Add in the project

Once it is installed, import it in the HTML file using the `script` tag.

```html
<script type="module">
    import "confirm-extended-dialog";
</script>
```

### Title and description

To set the title and description, use the `slot` attribute in the HTML. For the **title**, use `slot="title"` and for **description**, use `slot="description"`. You can use one or the other or both.

```html
<confirm-dialog>
    <h1 slot="title">Do you want to continue?</h1>
    <p slot="description">The changes cannot be undone.</p>
</confirm-dialog>
```
### Attributes

The `confirm-dialog` web component has the following attributes:

1. `confirm-label`. Customizes the text of the confirmation button. By default, it is `Confirm`.
2. `cancel-label`. Customizes the text of the cancel button. By default, it is `Cancel`.
3. `icon`. Customizes the icon to show what kind of confirmation dialog it is. The allowable values are `success`, `warning`, and `error`. By default, there is no icon.
4. `open`. It allows opening the dialog using the attribute by setting `open="true"`. By default, the dialog is closed.

#### Customize the text of the labels and the icon

```html
<confirm-dialog confirm-label="Yes" cancel-label="No" icon="warning">
    <h1 slot="title">Do you want to continue?</h1>
    <p slot="description">The changes cannot be undone.</p>
</confirm-dialog>
```

#### Open immediately

```html
<confirm-dialog open="true">
    <h1 slot="title">Do you want to continue?</h1>
    <p slot="description">The changes cannot be undone.</p>
</confirm-dialog>
```

### Listeners

The dialog web component can execute an action when the confirm or cancel button is clicked. Let's see each case:

```js
// When the confirm button is clicked, an alert message is shown
const dialog = document.querySelector("confirm-dialog");
dialog.addEventListener("confirm", () => alert("Hello world!!"));
```

```js
// When the cancel button is clicked, the dialog is immediately closed and an alert message is shown.
const dialog = document.querySelector("confirm-dialog");
dialog.addEventListener("cancel", () => alert("Goodbye world!!"));
```

## Technologies

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components" target="_blank" rel="noreferrer"> <img src="https://web-components-resources.appspot.com/static/logo.svg" alt="web component" width="40" height="40"/> </a> </p>

## Contributing
Any contribution is welcome.

## License
MIT licensed.

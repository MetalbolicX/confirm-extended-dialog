# Confirm Extended Dialog

## Description
Confirm extended dialog is a web component that displays a dialog box that can be customized in the description to display buttons of *Confirm* and *Cancel*. Finally, the dialog can execute actions after clicking the *Confirm* or *Cancel* button.

## Installation
Download from npm:

```sh
npm i confirm-extended-dialog
```

## Usage

### Add in the project

Once it is installed, import it in the HTML file using the `script` tag.

```html
<script type="module">
    import "confirm-extended-dialog";
</script>
```

> ⚠ **Warning:** Be careful.

### Title and description

To set the title and description, use the `slot` attribute in the HTML. For the **title**, use `slot="title"` and for **description**, use `slot="description"`. You can use one or the other or both.

```html
<confirm-extended-dialog>
    <h1 slot="title">Do you want to continue?</h1>
    <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
```
### Attributes

The `confirm-extended-dialog` web component has the following attributes:

1. `confirm-label`. Customizes the text of the confirmation button. By default, it is `Confirm`.
2. `cancel-label`. Customizes the text of the cancel button. By default, it is `Cancel`.
3. `icon`. Customizes the icon to show what kind of confirmation dialog it is. The allowable values are `success`, `warning`, and `error`. By default, there is no icon.
4. `open`. It allows opening the dialog using the attribute by setting `open="true"`. By default, the dialog is closed.

#### Customize the text of the labels and the icon

```html
<confirm-extended-dialog confirm-label="Yes" cancel-label="No" icon="warning">
    <h1 slot="title">Do you want to continue?</h1>
    <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
```

#### Open immediately

```html
<confirm-extended-dialog open="true">
    <h1 slot="title">Do you want to continue?</h1>
    <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
```

### Listeners

The confirm extended dialog web component can execute an action when the confirm or cancel button is clicked. Let's see each case:

```js
// When the confirm button is clicked, an alert message is shown
const dialog = document.querySelector("confirm-extended-dialog");
dialog.addEventListener("confirm", () => alert("Hello world!!"));
```

```js
// When the cancel button is clicked, the dialog is immediately closed and an alert message is shown.
const dialog = document.querySelector("confirm-extended-dialog");
dialog.addEventListener("cancel", () => alert("Goodbye world!!"));
```

## 📚 Documentation

<div style="text-align: center;">
  [![view - Documentation](https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge)](https://metalbolicx.github.io/confirm-extended-dialog/#/api-reference)
</div>

## Technologies Used

<table style="border: none;">
  <tr>
    <td style="text-align: center;">
      <a href="https://www.w3.org/html/" target="_blank">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="42" height="42" /><br/>
        <b>HTML</b><br/>
      </a>
    </td>
    <td style="text-align: center;">
      <a href="https://www.w3schools.com/css/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg" alt="css3" width="42" height="42" /><br/>
        <b>CSS</b><br/>
      </a>
    </td>
    </td>
    <td style="text-align: center;">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="js" width="42" height="42" /><br/>
        <b>JavaScript</b><br/>
      </a>
    </td>
    <td style="text-align: center;">
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="ts" width="42" height="42" /><br/>
        <b>TypeScript</b><br/>
      </a>
    </td>
    <td style="text-align: center;">
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components" target="_blank">
        <img src="https://web-components-resources.appspot.com/static/logo.svg" alt="web components" width="42" height="42" /><br/>
        <b>Web components</b><br/>
      </a>
    </td>
  </tr>
</table>

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Released under [MIT](/LICENSE) by [@MetalbolicX](https://github.com/MetalbolicX).
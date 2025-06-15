# API Reference

This page documents the core functions and types of the `confirm-extended-dialog` web component.

## Attributes

### `confirm-label`

Customizes the text of the confirmation button. By default, it is `Confirm`.

### `cancel-label`

Customizes the text of the cancel button. By default, it is `Cancel`.

### `icon`

Customizes the icon to show what kind of confirmation dialog it is. The allowable values are `success`, `warning`, and `error`. By default, there is no icon.

### `open`

Allows opening the dialog using the attribute by setting `open="true"`. By default, the dialog is closed.

## Slots

### `title`

The slot for the title of the dialog. You can use any HTML element, but it is recommended to use a heading element like `<h1>` or `<h2>`.

### `description`

The slot for the description of the dialog. You can use any HTML element, but it is recommended to use a paragraph element like `<p>`.

## Events

### `confirm`

Fired when the confirmation button is clicked. The event does not carry any data.

### `cancel`

Fired when the cancel button is clicked. The event does not carry any data.

## Example Usage

```html
<confirm-extended-dialog confirm-label="Yes" cancel-label="No" icon="warning">
    <h1 slot="title">Do you want to continue?</h1>
    <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
<confirm-extended-dialog open="true">
    <h1 slot="title">Do you want to continue?</h1>
    <p slot="description">The changes cannot be undone.</p>
</confirm-extended-dialog>
<script type="module">
    import "confirm-extended-dialog";
    const dialog = document.querySelector('confirm-extended-dialog');
    dialog.addEventListener('confirm', () => {
        alert('Confirmed!');
    });
    dialog.addEventListener('cancel', () => {
        alert('Cancelled!');
    });
</script>
```
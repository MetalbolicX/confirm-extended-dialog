# Tutorial

## Todo Confirmation

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo Confirmation</title>
    <script type="module" src="https://cdn.jsdelivr.net/npm/confirm-extended-dialog/dist/confirm-extended-dialog.js" lang="javascript"></script>
  </head>
  <body>
    <main>
      <h1>Todo app</h1>
      <confirm-extended-dialog id="confirmDialog" title="Confirm Action" message="Are you sure you want to delete the first item?" confirm-text="Delete" cancel-text="Cancel"></confirm-extended-dialog>
      <ul id="list"></ul>
    </main>
    <script type="text/javascript" src="todo.js"></script>
  </body>
</html>
```

```js
const list = document.getElementById("list");
const confirmDialog = document.getElementById("confirmDialog");

const items = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" }
];

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item.text;
  li.addEventListener("click", () => {
    confirmDialog.open = true;
    confirmDialog.onConfirm = () => {
      list.removeChild(li);
      confirmDialog.hide();
    };
  });
  list.appendChild(li);
});
```

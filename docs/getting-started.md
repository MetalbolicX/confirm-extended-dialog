# Getting Started

## Pre-requisites

To work with Node.js, you must have version 14 or higher installed. This is a requirement for ReScript version 11.

Check your Node.js version with the following command:

```sh
node -v
```

If you do not have Node.js installed in your current environment, or the installed version is too low, you can use [nvm](https://github.com/nvm-sh/nvm) to install the latest version of Node.js.

## Setup the project

[Vite](https://vitejs.dev/) is a build tool that allows you to create a project quickly and easily. It is recommended to use it to set up the project.

To create a new project with Vite, you can use the following commands:

<!-- tabs:start -->

### **npm**

```sh
npm create vite@latest
```

### **pnpm**

```sh
pnpm create vite
```

### **yarn**

```sh
yarn create vite
```

### **bun**

```sh
bun create vite
```

### **deno**

```sh
deno init --npm vite
```

<!-- tabs:end -->

## Usage

To use the `confirm-extended-dialog` web component, you can either install it using Node.js or include it via a CDN.

### Install using a package manager

To install the `confirm-extended-dialog` web component using any JavaScript package manager, you can use the following command:

<!-- tabs:start -->

#### **npm**

```sh
npm i confirm-extended-dialog
```

#### **pnpm**

```sh
pnpm add confirm-extended-dialog
```

#### **yarn**

```sh
yarn add confirm-extended-dialog
```

#### **bun**

```sh
bun add confirm-extended-dialog
```

#### **deno**

```sh
deno add --npm confirm-extended-dialog
```

<!-- tabs:end -->

Now you can import it in your JavaScript or TypeScript file:

```js
import "confirm-extended-dialog";
```

### Include via CDN

To include the `confirm-extended-dialog` web component via a CDN, you can use the following script tag in your HTML file:

<!-- tabs:start -->

#### **jsdelivr**

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/confirm-extended-dialog/dist/confirm-extended-dialog.js" lang="javascript"></script>
```

#### **unpkg**

```html
<script type="module" src="https://unpkg.com/confirm-extended-dialog/dist/confirm-extended-dialog.js" lang="javascript"></script>
```

<!-- tabs:end -->

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm Extended Dialog Example</title>
    <script type="module" src="https://cdn.jsdelivr.net/npm/confirm-extended-dialog/dist/confirm-extended-dialog.js" lang="javascript"></script>
  </head>
  <body>
    <confirm-extended-dialog open="true">
      <h1 slot="title">Do you want to continue?</h1>
      <p slot="description">The changes cannot be undone.</p>
    </confirm-extended-dialog>
  </body>
</html>
```

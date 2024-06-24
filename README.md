# React-simple-table-component

## Table of contents

- [Overview](#overview)
  - [Description](#Description)
  - [Builtwith](#Built-with)
- [Install](#Install)
  - [Launch](#Launch)
- [Example](#Example)
- [Props](#Props)
- [Author](#author)

## Overview

### Description

The componant is a React component that renders a simple table. Build for the [HRnet app](https://github.com/Stv-devl/hrnet-jquery-to-react), an exercice from [Openclassroom](https://openclassrooms.com/) for the bachelor level class "Application Developer - JavaScript React"

### Built-with

- [React](https://reactjs.org/) - JS library
- [SASS](https://sass-lang.com/) - CSS pre-processor

### Installation

Install the component :

```bash
npm install react-simple-table-component-v1
```

### Examples

```javascript
import React from "react";
import Table from "react-simple-table-component-v1";

//"data" array of object will contain the information to display in the array
const data = [
  { name: "David", firstname: "Robert" birthday: "22/05/1999" },
  { name: "Julie",  firstname: "Dupont" birthday: "11/02/1978", },
  //etc..
];

//"header" array of object will contain the information to display in the header of the array
// "name" should corresponds to "data" key, the label will be the text in header of the array
const header = [
  { name: "firstname", label: "First name" },
  { name: "lastname", label: "Last Name" },
  { name: "birthday", label: "Date of Birth" },
];

function Example() {
  return <Table datas={data} arrayHeader={arrayHeader} />;
}

export default Example;
```

### Props

| Name               | Type   | Default              | Description                                           |
| ------------------ | ------ | -------------------- | ----------------------------------------------------- |
| `datas`            | array  | []                   | The data to display in the table.                     |
| `arrayHeader`      | array  | []                   | The table headers.                                    |
| `entriesArray`     | array  | [10, 25, 50, 100]    | (Optional) Number of entries to display in 1 page.    |
| `fontUrl`          | string | adress               | (Optional) URL of the font to use.                    |
| `fontSetting`      | string | 'Roboto, sans-serif' | (Optional) Font style configuration                   |
| `fontSizeText`     | string | '16px'               | (Optional) Font size of the array                     |
| `fontWeightText`   | string | '500'                | (Optional) Font weight of the array                   |
| `fontColorText`    | string | '#000000'            | (Optional) Font color of the array                    |
| `fontSizeThead`    | string | '17px'               | (Optional) Font size for the table headers.           |
| `fontWeightThead`  | string | '500'                | (Optional) Font weight for the table headers.         |
| `fontColorThead`   | string | '#ffffff'            | (Optional) Font color for the table headers.          |
| `theadColor`       | string | '#72d683'            | (Optional) Background color for the table headers.    |
| `firstFieldColor`  | string | '#ffffff'            | (Optional) Background color for odd rows.             |
| `secondFieldColor` | string | '#c2fbcc'            | (Optional) Background color for even rows.            |
| `pagingColor`      | string | '#72d683'            | (Optional) Background color of the pagination button. |
| `checkedBtn`       | string | '#5cc36c'            | (Optional) Color of the selected button.              |
| `fontSizePaging`   | string | '16px'               | (Optional) Font size of the pagination button.        |
| `fontWeightPaging` | string | '500'                | (Optional) Font weight of the pagination button.      |
| `fontColorPaging`  | string | '#ffffff'            | (Optional) Font color of the pagination button.       |
| `arrayWidth`       | string | '90%'                | (Optional) Width of the table.                        |
| `tdPadding`        | string | '6px 8px'            | (Optional) Padding inside the table cells.            |
| `entriesInput`     | string | '100px'              | (Optional) Width of the number of entries dropdown.   |
| `searchInput`      | string | '200px'              | (Optional) Width of the search input field.           |

The prop `fontUrl` should has an adress like this="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
The prop `fontSetting` should match with the fontUrl adress : 'Roboto, sans-serif'

## Dependencies

- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-simple-table-component-v1": "^1.1.3"

## Author

- Github - [Stv-devl](https://github.com/Stv-devl/)

```

```

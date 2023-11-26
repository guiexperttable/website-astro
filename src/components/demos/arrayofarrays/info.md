---
layout: ../../../layouts/DemoCodeLayout.astro
---



You will find the code here: [demo-simple.component.ts](https://github.com/guiexperttable/table-website/blob/main/src/app/demos/simple/demo-simple.component.ts)
and the model here: [generateSimpleModel.ts](https://github.com/guiexperttable/demo-table-models/blob/main/src/lib/generateSimpleModel.ts)

Stackblitz: [stackblitz-guiexpert-angular-simple](https://stackblitz.com/edit/stackblitz-guiexpert-angular-simple)


Add the table tag to your template.
The syntax will depend on the framework you are using.
Here is an example of the Angular syntax:

```html
<guiexpert-table [tableModel]="tableModel"></guiexpert-table>
```


In this example we used this helper method to create a table model:

```ts
tableModel: TableModelIf = generateSimpleModel(1000, 100);
```

See method <b>generateSimpleModel</b>:





```ts title="generateSimpleModel()"
import { TableFactory, TableModelIf } from "@guiexpert/table";

export function generateSimpleModel(
  rowCount: number = 1000,
  columnCount: number = 1000
): TableModelIf {

  const bodyData: string[][] =
    Array.from(Array(rowCount).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `${r}/${c}`)
    );

  const headerData: string[][] =
    Array.from(Array(2).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `H${r}/${c}`)
    );

  const footerData: string[][] =
    Array.from(Array(2).keys()).map((r) =>
      Array.from(Array(columnCount).keys()).map((c) => `F${r}/${c}`)
    );

  return TableFactory.createTableModel({
    headerData,
    bodyData,
    footerData,
    overridingColumnWidth: 110,
    fixedLeftColumnCount: 2,
    fixedRightColumnCount: 2
  });
}

```


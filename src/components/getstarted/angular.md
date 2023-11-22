---
layout: ../../layouts/GetStartedLayout.astro
---

# Stackblitz


You can find it on stackblitz:
<a href="https://stackblitz.com/edit/stackblitz-guiexpert-tableplain-js-simple" target="_blank">stackblitz-guiexpert-tableplain-js-simple</a>.


Add the following NPM package to your existing plain js project
(run this in your project root directory):

```shell
npm install --save @guiexpert/table
```


Add an empty <b>&lt;div></b> element to your html code:




Be sure, that your div container expands. Add this CSS rule to your parent component's style.




Include (from a CDN) the predefined &#64;guiexpert/table CSS rules to your project. 
You can do it by adding this tag in your index.html...


If you are working with plain JS, you don't need to do this.
If you are using TypeScript as a language, please import the following classes:





Create a table model. Select ('querySelector') the <b>&lt;div></b> element and create a table scope.
Finally, call <b>firstInit()</b> at least once.
On the right side, you will see the plain TS version.
For plain JS, remove <b>': TableModelIf'</b>.





---
id: fast-foundation.treeitem
title: TreeItem class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [TreeItem](./fast-foundation.treeitem.md)

## TreeItem class

A Tree item Custom HTML Element.


start - Content which can be provided before the tree item content


end - Content which can be provided after the tree item content


- The default slot for tree item text content


item - The slot for tree items (fast tree items manage this assignment themselves)


expand-collapse-button - The expand/collapse button


positioning-region - The element used to position the tree item content with exception of any child nodes


content-region - The element containing the expand/collapse, start, and end slots


items - The element wrapping any child items


expand-collapse-button - The expand/collapse button


expanded-change - Fires a custom 'expanded-change' event when the expanded state changes


selected-change - Fires a custom 'selected-change' event when the selected state changes

<b>Signature:</b>

```typescript
export declare class TreeItem extends FoundationElement 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [disabled](./fast-foundation.treeitem.disabled.md) |  | boolean | When true, the control will be immutable by user interaction. See [disabled HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled) for more information. |
|  [expanded](./fast-foundation.treeitem.expanded.md) |  | boolean | When true, the control will be appear expanded by user interaction. |
|  [isNestedItem](./fast-foundation.treeitem.isnesteditem.md) |  | () =&gt; boolean | Whether the tree is nested |
|  [selected](./fast-foundation.treeitem.selected.md) |  | boolean | When true, the control will appear selected by user interaction. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [focusItem(el)](./fast-foundation.treeitem.focusitem.md) | <code>static</code> | Places document focus on a tree item |

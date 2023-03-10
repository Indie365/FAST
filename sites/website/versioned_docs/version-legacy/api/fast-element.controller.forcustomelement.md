---
id: fast-element.controller.forcustomelement
title: Controller.forCustomElement() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-element](./fast-element.md) &gt; [Controller](./fast-element.controller.md) &gt; [forCustomElement](./fast-element.controller.forcustomelement.md)

## Controller.forCustomElement() method

Locates or creates a controller for the specified element.

<b>Signature:</b>

```typescript
static forCustomElement(element: HTMLElement): Controller;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  element | HTMLElement | The element to return the controller for. |

<b>Returns:</b>

[Controller](./fast-element.controller.md)

## Remarks

The specified element must have a [FASTElementDefinition](./fast-element.fastelementdefinition.md) registered either through the use of the [customElement()](./fast-element.customelement.md) decorator or a call to `FASTElement.define`<!-- -->.

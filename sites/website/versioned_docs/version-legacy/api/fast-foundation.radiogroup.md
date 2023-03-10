---
id: fast-foundation.radiogroup
title: RadioGroup class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [RadioGroup](./fast-foundation.radiogroup.md)

## RadioGroup class

An Radio Group Custom HTML Element. Implements the [ARIA radiogroup](https://www.w3.org/TR/wai-aria-1.1/#radiogroup)<!-- -->.


label - The slot for the label


- The default slot for radio buttons


positioning-region - The positioning region for laying out the radios


change - Fires a custom 'change' event when the value changes

<b>Signature:</b>

```typescript
export declare class RadioGroup extends FoundationElement 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [childItems](./fast-foundation.radiogroup.childitems.md) |  | HTMLElement\[\] |  |
|  [disabled](./fast-foundation.radiogroup.disabled.md) |  | boolean | Disables the radio group and child radios. |
|  [name](./fast-foundation.radiogroup.name.md) |  | string | The name of the radio group. Setting this value will set the name value for all child radio elements. |
|  [orientation](./fast-foundation.radiogroup.orientation.md) |  | Orientation \| "horizontal" \| "vertical" | The orientation of the group |
|  [readOnly](./fast-foundation.radiogroup.readonly.md) |  | boolean | When true, the child radios will be immutable by user interaction. See [readonly HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information. |
|  [value](./fast-foundation.radiogroup.value.md) |  | string | The value of the checked radio |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [disconnectedCallback()](./fast-foundation.radiogroup.disconnectedcallback.md) |  |  |
|  [nameChanged()](./fast-foundation.radiogroup.namechanged.md) |  |  |
|  [valueChanged()](./fast-foundation.radiogroup.valuechanged.md) |  |  |

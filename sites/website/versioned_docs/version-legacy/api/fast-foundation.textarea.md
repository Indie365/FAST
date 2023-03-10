---
id: fast-foundation.textarea
title: TextArea class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [TextArea](./fast-foundation.textarea.md)

## TextArea class

A Text Area Custom HTML Element. Based largely on the [&lt;textarea&gt; element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)<!-- -->.


- The default slot for the label


label - The label


root - The element wrapping the control


control - The textarea element


change - Emits a custom 'change' event when the textarea emits a change event

<b>Signature:</b>

```typescript
export declare class TextArea extends FormAssociatedTextArea 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [autofocus](./fast-foundation.textarea.autofocus.md) |  | boolean | Indicates that this element should get focus after the page finishes loading. |
|  [cols](./fast-foundation.textarea.cols.md) |  | number | Sizes the element horizontally by a number of character columns. |
|  [formId](./fast-foundation.textarea.formid.md) |  | string | The [id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) the element is associated to |
|  [list](./fast-foundation.textarea.list.md) |  | string | Allows associating a [datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) to the element by [https://developer.mozilla.org/en-US/docs/Web/API/Element/id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)<!-- -->. |
|  [maxlength](./fast-foundation.textarea.maxlength.md) |  | number | The maximum number of characters a user can enter. |
|  [minlength](./fast-foundation.textarea.minlength.md) |  | number | The minimum number of characters a user can enter. |
|  [name](./fast-foundation.textarea.name.md) |  | string | The name of the element. |
|  [placeholder](./fast-foundation.textarea.placeholder.md) |  | string | Sets the placeholder value of the element, generally used to provide a hint to the user. |
|  [readOnly](./fast-foundation.textarea.readonly.md) |  | boolean | When true, the control will be immutable by user interaction. See [readonly HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information. |
|  [resize](./fast-foundation.textarea.resize.md) |  | [TextAreaResize](./fast-foundation.textarearesize.md) | The resize mode of the element. |
|  [rows](./fast-foundation.textarea.rows.md) |  | number | Sizes the element vertically by a number of character rows. |
|  [spellcheck](./fast-foundation.textarea.spellcheck.md) |  | boolean | Sets if the element is eligible for spell checking but the UA. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [select()](./fast-foundation.textarea.select.md) |  | Selects all the text in the text area |

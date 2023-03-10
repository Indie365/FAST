---
id: fast-element.compiletemplate
title: compileTemplate() function
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-element](./fast-element.md) &gt; [compileTemplate](./fast-element.compiletemplate.md)

## compileTemplate() function

Compiles a template and associated directives into a raw compilation result which include a cloneable DocumentFragment and factories capable of attaching runtime behavior to nodes within the fragment.

<b>Signature:</b>

```typescript
export declare function compileTemplate(template: HTMLTemplateElement, directives: ReadonlyArray<HTMLDirective>): CompilationResult;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  template | HTMLTemplateElement | The template to compile. |
|  directives | ReadonlyArray&lt;[HTMLDirective](./fast-element.htmldirective.md)<!-- -->&gt; | The directives referenced by the template. |

<b>Returns:</b>

[CompilationResult](./fast-element.compilationresult.md)

## Remarks

The template that is provided for compilation is altered in-place and cannot be compiled again. If the original template must be preserved, it is recommended that you clone the original and pass the clone to this API.

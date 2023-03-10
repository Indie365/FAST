---
id: fast-element.partialfastelementdefinition
title: PartialFASTElementDefinition interface
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-element](./fast-element.md) &gt; [PartialFASTElementDefinition](./fast-element.partialfastelementdefinition.md)

## PartialFASTElementDefinition interface

Represents metadata configuration for a custom element.

<b>Signature:</b>

```typescript
export interface PartialFASTElementDefinition 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [attributes](./fast-element.partialfastelementdefinition.attributes.md) | ([AttributeConfiguration](./fast-element.attributeconfiguration.md) \| string)\[\] | The custom attributes of the custom element. |
|  [elementOptions](./fast-element.partialfastelementdefinition.elementoptions.md) | ElementDefinitionOptions | Options controlling how the custom element is defined with the platform. |
|  [name](./fast-element.partialfastelementdefinition.name.md) | string | The name of the custom element. |
|  [shadowOptions](./fast-element.partialfastelementdefinition.shadowoptions.md) | Partial&lt;ShadowRootInit&gt; \| null | Options controlling the creation of the custom element's shadow DOM. |
|  [styles](./fast-element.partialfastelementdefinition.styles.md) | [ComposableStyles](./fast-element.composablestyles.md) \| [ComposableStyles](./fast-element.composablestyles.md)<!-- -->\[\] | The styles to associate with the custom element. |
|  [template](./fast-element.partialfastelementdefinition.template.md) | [ElementViewTemplate](./fast-element.elementviewtemplate.md) | The template to render for the custom element. |

---
id: fast-components.fastsearch
title: fastSearch variable
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-components](./fast-components.md) &gt; [fastSearch](./fast-components.fastsearch.md)

## fastSearch variable

A function that returns a [Search](./fast-foundation.search.md) registration for configuring the component with a DesignSystem. Implements [searchTemplate](./fast-foundation.searchtemplate.md)

<b>Signature:</b>

```typescript
fastSearch: (overrideDefinition?: import("@microsoft/fast-foundation").OverrideFoundationElementDefinition<{
    baseName: string;
    baseClass: typeof FoundationSearch;
    template: import("@microsoft/fast-foundation").FoundationElementTemplate<import("@microsoft/fast-element").ViewTemplate<FoundationSearch, any>, import("@microsoft/fast-foundation").SearchOptions>;
    styles: import("@microsoft/fast-foundation").FoundationElementTemplate<import("@microsoft/fast-element").ElementStyles, import("@microsoft/fast-foundation").TextFieldOptions>;
    shadowOptions: {
        delegatesFocus: true;
    };
}> | undefined) => import("@microsoft/fast-foundation").FoundationElementRegistry<{
    baseName: string;
    baseClass: typeof FoundationSearch;
    template: import("@microsoft/fast-foundation").FoundationElementTemplate<import("@microsoft/fast-element").ViewTemplate<FoundationSearch, any>, import("@microsoft/fast-foundation").SearchOptions>;
    styles: import("@microsoft/fast-foundation").FoundationElementTemplate<import("@microsoft/fast-element").ElementStyles, import("@microsoft/fast-foundation").TextFieldOptions>;
    shadowOptions: {
        delegatesFocus: true;
    };
}, typeof Search>
```

## Remarks

Generates HTML Element: &lt;<!-- -->fast-search<!-- -->&gt;

[delegatesFocus](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus)

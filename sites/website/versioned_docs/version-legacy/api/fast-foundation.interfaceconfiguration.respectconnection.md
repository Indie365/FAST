---
id: fast-foundation.interfaceconfiguration.respectconnection
title: InterfaceConfiguration.respectConnection property
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [InterfaceConfiguration](./fast-foundation.interfaceconfiguration.md) &gt; [respectConnection](./fast-foundation.interfaceconfiguration.respectconnection.md)

## InterfaceConfiguration.respectConnection property

When true, the dependency will be re-resolved when FASTElement connection changes. If the resolved value changes due to connection change, a [notification](./fast-element.observable.md) will be emitted for the property, with the previous and next values provided to any subscriber.

<b>Signature:</b>

```typescript
respectConnection?: boolean;
```
---
id: fast-foundation.newinstanceforscope
title: newInstanceForScope variable
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [newInstanceForScope](./fast-foundation.newinstanceforscope.md)

## newInstanceForScope variable

A decorator that indicates that a new instance should be injected scoped to the container that requested the instance.

<b>Signature:</b>

```typescript
newInstanceForScope: (key: any) => any
```

## Remarks

This creates a resolver with an instance strategy pointing to the new instance, effectively making this a singleton, scoped to the container or DOM's subtree.

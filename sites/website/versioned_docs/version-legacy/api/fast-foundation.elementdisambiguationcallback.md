---
id: fast-foundation.elementdisambiguationcallback
title: ElementDisambiguationCallback type
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [ElementDisambiguationCallback](./fast-foundation.elementdisambiguationcallback.md)

## ElementDisambiguationCallback type

The callback type that is invoked when two elements are trying to define themselves with the same name.

<b>Signature:</b>

```typescript
export declare type ElementDisambiguationCallback = (nameAttempt: string, typeAttempt: Constructable, existingType: Constructable) => ElementDisambiguationResult;
```

## Remarks

The callback should return either: 1. A string to provide a new name used to disambiguate the element 2. ElementDisambiguation.ignoreDuplicate to ignore the duplicate element entirely 3. ElementDisambiguation.definitionCallbackOnly to skip defining the element but still call the provided callback passed to DesignSystemRegistrationContext.tryDefineElement

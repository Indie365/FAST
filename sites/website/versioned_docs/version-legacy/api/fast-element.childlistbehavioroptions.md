---
id: fast-element.childlistbehavioroptions
title: ChildListBehaviorOptions interface
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-element](./fast-element.md) &gt; [ChildListBehaviorOptions](./fast-element.childlistbehavioroptions.md)

## ChildListBehaviorOptions interface

The options used to configure child list observation.

<b>Signature:</b>

```typescript
export interface ChildListBehaviorOptions<T = any> extends NodeBehaviorOptions<T>, Omit<MutationObserverInit, "subtree" | "childList"> 
```
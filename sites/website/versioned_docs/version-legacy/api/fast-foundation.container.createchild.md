---
id: fast-foundation.container.createchild
title: Container.createChild() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [Container](./fast-foundation.container.md) &gt; [createChild](./fast-foundation.container.createchild.md)

## Container.createChild() method

Creates a child dependency injection container parented to this container.

<b>Signature:</b>

```typescript
createChild(config?: Partial<Omit<ContainerConfiguration, "parentLocator">>): Container;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  config | Partial&lt;Omit&lt;[ContainerConfiguration](./fast-foundation.containerconfiguration.md)<!-- -->, "parentLocator"&gt;&gt; | The configuration for the new container. |

<b>Returns:</b>

[Container](./fast-foundation.container.md)

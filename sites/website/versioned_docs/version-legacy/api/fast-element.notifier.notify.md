---
id: fast-element.notifier.notify
title: Notifier.notify() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-element](./fast-element.md) &gt; [Notifier](./fast-element.notifier.md) &gt; [notify](./fast-element.notifier.notify.md)

## Notifier.notify() method

Notifies all subscribers, based on the args.

<b>Signature:</b>

```typescript
notify(args: any): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  args | any | Data passed along to subscribers during notification. |

<b>Returns:</b>

void

## Remarks

In some implementations, the args may be used to target specific subscribers. This is usually in the case where a propertyName was passed during subscription.

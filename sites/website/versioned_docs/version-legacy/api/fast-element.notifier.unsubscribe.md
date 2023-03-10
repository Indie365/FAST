---
id: fast-element.notifier.unsubscribe
title: Notifier.unsubscribe() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-element](./fast-element.md) &gt; [Notifier](./fast-element.notifier.md) &gt; [unsubscribe](./fast-element.notifier.unsubscribe.md)

## Notifier.unsubscribe() method

Unsubscribes from notification of changes in an object's state.

<b>Signature:</b>

```typescript
unsubscribe(subscriber: Subscriber, propertyToUnwatch?: any): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  subscriber | [Subscriber](./fast-element.subscriber.md) | The object that is unsubscribing from change notification. |
|  propertyToUnwatch | any | The name of the property that the subscriber is no longer interested in watching. |

<b>Returns:</b>

void

## Remarks

Some implementation may or may not require the propertyToUnwatch.

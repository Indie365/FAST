---
id: fast-foundation.flipper
title: Flipper class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [Flipper](./fast-foundation.flipper.md)

## Flipper class

A Flipper Custom HTML Element. Flippers are a form of button that implies directional content navigation, such as in a carousel.


next - The next flipper content


previous - The previous flipper content


next - Wraps the next flipper content


previous - Wraps the previous flipper content


click - Fires a custom 'click' event when Enter or Space is invoked via keyboard and the flipper is exposed to assistive technologies.

<b>Signature:</b>

```typescript
export declare class Flipper extends FoundationElement 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [direction](./fast-foundation.flipper.direction.md) |  | [FlipperDirection](./fast-foundation.flipperdirection.md) | The direction that the flipper implies navigating. |
|  [disabled](./fast-foundation.flipper.disabled.md) |  | boolean | The disabled state of the flipper. |
|  [hiddenFromAT](./fast-foundation.flipper.hiddenfromat.md) |  | boolean | Indicates the flipper should be hidden from assistive technology. Because flippers are often supplementary navigation, they are often hidden from assistive technology. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [keyupHandler(e)](./fast-foundation.flipper.keyuphandler.md) |  | Simulate a click event when the flipper has focus and the user hits enter or space keys Blur focus if the user hits escape key |

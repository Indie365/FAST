---
id: fast-foundation.horizontalscroll
title: HorizontalScroll class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [HorizontalScroll](./fast-foundation.horizontalscroll.md)

## HorizontalScroll class

A HorizontalScroll Custom HTML Element


start - Content which can be provided before the scroll area


end - Content which can be provided after the scroll area


scroll-area - Wraps the entire scrollable region


scroll-view - The visible scroll area


content-container - The container for the content


scroll-prev - The previous flipper container


scroll-action-previous - The element wrapping the previous flipper


scroll-next - The next flipper container


scroll-action-next - The element wrapping the next flipper


scrollstart - Fires a custom 'scrollstart' event when scrolling


scrollend - Fires a custom 'scrollend' event when scrolling stops

<b>Signature:</b>

```typescript
export declare class HorizontalScroll extends FoundationElement 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [content](./fast-foundation.horizontalscroll.content.md) |  | HTMLDivElement | Reference to DOM element that holds the slotted content |
|  [duration](./fast-foundation.horizontalscroll.duration.md) |  | string | The CSS time value for the scroll transition duration. Overrides the <code>speed</code> attribute. |
|  [easing](./fast-foundation.horizontalscroll.easing.md) |  | [ScrollEasing](./fast-foundation.scrolleasing.md) | Attribute used for easing, defaults to ease-in-out |
|  [flippersHiddenFromAT](./fast-foundation.horizontalscroll.flippershiddenfromat.md) |  | boolean | Attribute to hide flippers from assistive technology |
|  [nextFlipperContainer](./fast-foundation.horizontalscroll.nextflippercontainer.md) |  | HTMLDivElement | Reference to flipper to scroll to the next content |
|  [previousFlipperContainer](./fast-foundation.horizontalscroll.previousflippercontainer.md) |  | HTMLDivElement | Reference to flipper to scroll to previous content |
|  [scrollContainer](./fast-foundation.horizontalscroll.scrollcontainer.md) |  | HTMLDivElement | Reference to DOM element that scrolls the content |
|  [scrollItems](./fast-foundation.horizontalscroll.scrollitems.md) |  | HTMLElement\[\] | The default slotted items placed in the scrolling container. |
|  [speed](./fast-foundation.horizontalscroll.speed.md) |  | number | Speed of scroll in pixels per second |
|  [view](./fast-foundation.horizontalscroll.view.md) |  | [HorizontalScrollView](./fast-foundation.horizontalscrollview.md) | View: default \| mobile |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [connectedCallback()](./fast-foundation.horizontalscroll.connectedcallback.md) |  |  |
|  [disconnectedCallback()](./fast-foundation.horizontalscroll.disconnectedcallback.md) |  |  |
|  [keyupHandler(e)](./fast-foundation.horizontalscroll.keyuphandler.md) |  | Lets the user arrow left and right through the horizontal scroll |
|  [resized()](./fast-foundation.horizontalscroll.resized.md) |  | Monitors resize event on the horizontal-scroll element |
|  [scrolled()](./fast-foundation.horizontalscroll.scrolled.md) |  | Monitors scrolled event on the content container |
|  [scrollItemsChanged(previous, next)](./fast-foundation.horizontalscroll.scrollitemschanged.md) |  | Updates scroll stops and flippers when scroll items change |
|  [scrollToNext()](./fast-foundation.horizontalscroll.scrolltonext.md) |  | Scrolls items to the right |
|  [scrollToPosition(newPosition, position)](./fast-foundation.horizontalscroll.scrolltoposition.md) |  | Handles scrolling with easing |
|  [scrollToPrevious()](./fast-foundation.horizontalscroll.scrolltoprevious.md) |  | Scrolls items to the left |

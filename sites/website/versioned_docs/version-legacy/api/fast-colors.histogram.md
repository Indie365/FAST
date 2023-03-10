---
id: fast-colors.histogram
title: Histogram class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-colors](./fast-colors.md) &gt; [Histogram](./fast-colors.histogram.md)

## Histogram class

For each possible color, this counts how many pixels in the source image match that color. If signifigantBits is less than 8, each channel (eg: red, green, blue) in each color is reduced to fit in significantBits. So for the default value of 5 significantBits colors are reduced from 8 bits per channel (0-255) to 5 (0-31). Colors that were previously distinct get combined together. If the image source has more than 2^32 pixels (eg: a square image 65536x65536 in size) of the same color this code will break.

<b>Signature:</b>

```typescript
export declare class Histogram 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(source, significantBits, pixelSkipping, isHistogramPixelValid)](./fast-colors.histogram._constructor_.md) |  | Constructs a new instance of the <code>Histogram</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [data](./fast-colors.histogram.data.md) |  | Uint32Array |  |
|  [getHistogramIndex](./fast-colors.histogram.gethistogramindex.md) |  | (r: number, g: number, b: number) =&gt; number |  |
|  [getHistogramValue](./fast-colors.histogram.gethistogramvalue.md) |  | (r: number, g: number, b: number) =&gt; number |  |
|  [maxBlue](./fast-colors.histogram.maxblue.md) |  | number |  |
|  [maxGreen](./fast-colors.histogram.maxgreen.md) |  | number |  |
|  [maxRed](./fast-colors.histogram.maxred.md) |  | number |  |
|  [minBlue](./fast-colors.histogram.minblue.md) |  | number |  |
|  [minGreen](./fast-colors.histogram.mingreen.md) |  | number |  |
|  [minRed](./fast-colors.histogram.minred.md) |  | number |  |
|  [setHistogramValue](./fast-colors.histogram.sethistogramvalue.md) |  | (value: number, r: number, g: number, b: number) =&gt; void |  |
|  [significantBits](./fast-colors.histogram.significantbits.md) |  | number |  |
|  [total](./fast-colors.histogram.total.md) |  | number |  |

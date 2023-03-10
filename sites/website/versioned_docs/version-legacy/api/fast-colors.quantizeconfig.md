---
id: fast-colors.quantizeconfig
title: QuantizeConfig interface
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-colors](./fast-colors.md) &gt; [QuantizeConfig](./fast-colors.quantizeconfig.md)

## QuantizeConfig interface

A quantize configuration object.

<b>Signature:</b>

```typescript
export interface QuantizeConfig 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [fractionByPopulation](./fast-colors.quantizeconfig.fractionbypopulation.md) | number | For a final palette of size targetPaletteSize, we determine the first fractionByPopulation\*targetPaletteSize using population as the only factor when determening sort order. For the rest of the colors the sort order is population\*colorVolume. This helps highly contrasting colors in a small area to show up in some of the final output. |
|  [isBoxValid](./fast-colors.quantizeconfig.isboxvalid.md) | ((box: [PixelBox](./fast-colors.pixelbox.md)<!-- -->) =&gt; boolean) \| null | This predicate can be used to screen out undesirable colors from the final output. EG: excluding colors with a pixelCount below a min value. |
|  [isHistogramPixelValid](./fast-colors.quantizeconfig.ishistogrampixelvalid.md) | ((pixel: number\[\]) =&gt; boolean) \| null | This predicate can be used to exlude pixels from the histogram. It is passed numbers in the range \[0,255\] in rgba order. EG: Excluding colors too close to pure white or ones which are transparent. |
|  [maxIterations](./fast-colors.quantizeconfig.maxiterations.md) | number | If the quantization process goes on for more iterations than maxIterations it is aborted and the current results are returned. Only likely to happen in extreme edge cases with strange input. |
|  [pixelSkipping](./fast-colors.quantizeconfig.pixelskipping.md) | number | Lowering this value increases the CPU load but includes more pixels in the calculation. |
|  [significantBits](./fast-colors.quantizeconfig.significantbits.md) | number | Must be in the range \[1,8\]. Memory use increases as 4\*2^(3\*significantBits). Setting significantBits to 8 requires a 64 megabyte histogram. |
|  [targetPaletteSize](./fast-colors.quantizeconfig.targetpalettesize.md) | number | Desired output palette size. Actual output may vary in edge cases such as images with very few colors. |

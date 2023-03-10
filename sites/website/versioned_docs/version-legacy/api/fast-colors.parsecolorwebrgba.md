---
id: fast-colors.parsecolorwebrgba
title: parseColorWebRGBA() function
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-colors](./fast-colors.md) &gt; [parseColorWebRGBA](./fast-colors.parsecolorwebrgba.md)

## parseColorWebRGBA() function

Converts a rgba color string to a [ColorRGBA64](./fast-colors.colorrgba64.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare function parseColorWebRGBA(raw: string): ColorRGBA64 | null;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  raw | string | a color string format "rgba(RR,GG,BB,a)" where RR,GG,BB are \[0,255\] and a is \[0,1\] |

<b>Returns:</b>

[ColorRGBA64](./fast-colors.colorrgba64.md) \| null

## Example


```ts
parseColorWebRGBA("rgba(255, 0, 0, 1");

```

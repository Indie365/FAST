import { ColorRGBA64Config } from "./color-rgba-64.js";

/**
 * Browser {@link https://www.w3schools.com/colors/colors_names.asp | named colors}.
 * @public
 */
export type NamedColors =
    | "aliceblue"
    | "antiquewhite"
    | "aqua"
    | "aquamarine"
    | "azure"
    | "beige"
    | "bisque"
    | "black"
    | "blanchedalmond"
    | "blue"
    | "blueviolet"
    | "brown"
    | "burlywood"
    | "cadetblue"
    | "chartreuse"
    | "chocolate"
    | "coral"
    | "cornflowerblue"
    | "cornsilk"
    | "crimson"
    | "cyan"
    | "darkblue"
    | "darkcyan"
    | "darkgoldenrod"
    | "darkgray"
    | "darkgreen"
    | "darkgrey"
    | "darkkhaki"
    | "darkmagenta"
    | "darkolivegreen"
    | "darkorange"
    | "darkorchid"
    | "darkred"
    | "darksalmon"
    | "darkseagreen"
    | "darkslateblue"
    | "darkslategray"
    | "darkslategrey"
    | "darkturquoise"
    | "darkviolet"
    | "deeppink"
    | "deepskyblue"
    | "dimgray"
    | "dimgrey"
    | "dodgerblue"
    | "firebrick"
    | "floralwhite"
    | "forestgreen"
    | "fuchsia"
    | "gainsboro"
    | "ghostwhite"
    | "gold"
    | "goldenrod"
    | "gray"
    | "green"
    | "greenyellow"
    | "grey"
    | "honeydew"
    | "hotpink"
    | "indianred"
    | "indigo"
    | "ivory"
    | "khaki"
    | "lavender"
    | "lavenderblush"
    | "lawngreen"
    | "lemonchiffon"
    | "lightblue"
    | "lightcoral"
    | "lightcyan"
    | "lightgoldenrodyellow"
    | "lightgray"
    | "lightgreen"
    | "lightgrey"
    | "lightpink"
    | "lightsalmon"
    | "lightseagreen"
    | "lightskyblue"
    | "lightslategray"
    | "lightslategrey"
    | "lightsteelblue"
    | "lightyellow"
    | "lime"
    | "limegreen"
    | "linen"
    | "magenta"
    | "maroon"
    | "mediumaquamarine"
    | "mediumblue"
    | "mediumorchid"
    | "mediumpurple"
    | "mediumseagreen"
    | "mediumslateblue"
    | "mediumspringgreen"
    | "mediumturquoise"
    | "mediumvioletred"
    | "midnightblue"
    | "mintcream"
    | "mistyrose"
    | "moccasin"
    | "navajowhite"
    | "navy"
    | "oldlace"
    | "olive"
    | "olivedrab"
    | "orange"
    | "orangered"
    | "orchid"
    | "palegoldenrod"
    | "palegreen"
    | "paleturquoise"
    | "palevioletred"
    | "papayawhip"
    | "peachpuff"
    | "peru"
    | "pink"
    | "plum"
    | "powderblue"
    | "purple"
    | "red"
    | "rosybrown"
    | "royalblue"
    | "saddlebrown"
    | "salmon"
    | "sandybrown"
    | "seagreen"
    | "seashell"
    | "sienna"
    | "silver"
    | "skyblue"
    | "slateblue"
    | "slategray"
    | "slategrey"
    | "snow"
    | "springgreen"
    | "steelblue"
    | "tan"
    | "teal"
    | "thistle"
    | "tomato"
    | "transparent"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen";

export const namedColorsConfigs: { [name in NamedColors]: ColorRGBA64Config } = {
    aliceblue: {
        r: 0.941176,
        g: 0.972549,
        b: 1,
    },
    antiquewhite: {
        r: 0.980392,
        g: 0.921569,
        b: 0.843137,
    },
    aqua: {
        r: 0,
        g: 1,
        b: 1,
    },
    aquamarine: {
        r: 0.498039,
        g: 1,
        b: 0.831373,
    },
    azure: {
        r: 0.941176,
        g: 1,
        b: 1,
    },
    beige: {
        r: 0.960784,
        g: 0.960784,
        b: 0.862745,
    },
    bisque: {
        r: 1,
        g: 0.894118,
        b: 0.768627,
    },
    black: {
        r: 0,
        g: 0,
        b: 0,
    },
    blanchedalmond: {
        r: 1,
        g: 0.921569,
        b: 0.803922,
    },
    blue: {
        r: 0,
        g: 0,
        b: 1,
    },
    blueviolet: {
        r: 0.541176,
        g: 0.168627,
        b: 0.886275,
    },
    brown: {
        r: 0.647059,
        g: 0.164706,
        b: 0.164706,
    },
    burlywood: {
        r: 0.870588,
        g: 0.721569,
        b: 0.529412,
    },
    cadetblue: {
        r: 0.372549,
        g: 0.619608,
        b: 0.627451,
    },
    chartreuse: {
        r: 0.498039,
        g: 1,
        b: 0,
    },
    chocolate: {
        r: 0.823529,
        g: 0.411765,
        b: 0.117647,
    },
    coral: {
        r: 1,
        g: 0.498039,
        b: 0.313725,
    },
    cornflowerblue: {
        r: 0.392157,
        g: 0.584314,
        b: 0.929412,
    },
    cornsilk: {
        r: 1,
        g: 0.972549,
        b: 0.862745,
    },
    crimson: {
        r: 0.862745,
        g: 0.078431,
        b: 0.235294,
    },
    cyan: {
        r: 0,
        g: 1,
        b: 1,
    },
    darkblue: {
        r: 0,
        g: 0,
        b: 0.545098,
    },
    darkcyan: {
        r: 0,
        g: 0.545098,
        b: 0.545098,
    },
    darkgoldenrod: {
        r: 0.721569,
        g: 0.52549,
        b: 0.043137,
    },
    darkgray: {
        r: 0.662745,
        g: 0.662745,
        b: 0.662745,
    },
    darkgreen: {
        r: 0,
        g: 0.392157,
        b: 0,
    },
    darkgrey: {
        r: 0.662745,
        g: 0.662745,
        b: 0.662745,
    },
    darkkhaki: {
        r: 0.741176,
        g: 0.717647,
        b: 0.419608,
    },
    darkmagenta: {
        r: 0.545098,
        g: 0,
        b: 0.545098,
    },
    darkolivegreen: {
        r: 0.333333,
        g: 0.419608,
        b: 0.184314,
    },
    darkorange: {
        r: 1,
        g: 0.54902,
        b: 0,
    },
    darkorchid: {
        r: 0.6,
        g: 0.196078,
        b: 0.8,
    },
    darkred: {
        r: 0.545098,
        g: 0,
        b: 0,
    },
    darksalmon: {
        r: 0.913725,
        g: 0.588235,
        b: 0.478431,
    },
    darkseagreen: {
        r: 0.560784,
        g: 0.737255,
        b: 0.560784,
    },
    darkslateblue: {
        r: 0.282353,
        g: 0.239216,
        b: 0.545098,
    },
    darkslategray: {
        r: 0.184314,
        g: 0.309804,
        b: 0.309804,
    },
    darkslategrey: {
        r: 0.184314,
        g: 0.309804,
        b: 0.309804,
    },
    darkturquoise: {
        r: 0,
        g: 0.807843,
        b: 0.819608,
    },
    darkviolet: {
        r: 0.580392,
        g: 0,
        b: 0.827451,
    },
    deeppink: {
        r: 1,
        g: 0.078431,
        b: 0.576471,
    },
    deepskyblue: {
        r: 0,
        g: 0.74902,
        b: 1,
    },
    dimgray: {
        r: 0.411765,
        g: 0.411765,
        b: 0.411765,
    },
    dimgrey: {
        r: 0.411765,
        g: 0.411765,
        b: 0.411765,
    },
    dodgerblue: {
        r: 0.117647,
        g: 0.564706,
        b: 1,
    },
    firebrick: {
        r: 0.698039,
        g: 0.133333,
        b: 0.133333,
    },
    floralwhite: {
        r: 1,
        g: 0.980392,
        b: 0.941176,
    },
    forestgreen: {
        r: 0.133333,
        g: 0.545098,
        b: 0.133333,
    },
    fuchsia: {
        r: 1,
        g: 0,
        b: 1,
    },
    gainsboro: {
        r: 0.862745,
        g: 0.862745,
        b: 0.862745,
    },
    ghostwhite: {
        r: 0.972549,
        g: 0.972549,
        b: 1,
    },
    gold: {
        r: 1,
        g: 0.843137,
        b: 0,
    },
    goldenrod: {
        r: 0.854902,
        g: 0.647059,
        b: 0.12549,
    },
    gray: {
        r: 0.501961,
        g: 0.501961,
        b: 0.501961,
    },
    green: {
        r: 0,
        g: 0.501961,
        b: 0,
    },
    greenyellow: {
        r: 0.678431,
        g: 1,
        b: 0.184314,
    },
    grey: {
        r: 0.501961,
        g: 0.501961,
        b: 0.501961,
    },
    honeydew: {
        r: 0.941176,
        g: 1,
        b: 0.941176,
    },
    hotpink: {
        r: 1,
        g: 0.411765,
        b: 0.705882,
    },
    indianred: {
        r: 0.803922,
        g: 0.360784,
        b: 0.360784,
    },
    indigo: {
        r: 0.294118,
        g: 0,
        b: 0.509804,
    },
    ivory: {
        r: 1,
        g: 1,
        b: 0.941176,
    },
    khaki: {
        r: 0.941176,
        g: 0.901961,
        b: 0.54902,
    },
    lavender: {
        r: 0.901961,
        g: 0.901961,
        b: 0.980392,
    },
    lavenderblush: {
        r: 1,
        g: 0.941176,
        b: 0.960784,
    },
    lawngreen: {
        r: 0.486275,
        g: 0.988235,
        b: 0,
    },
    lemonchiffon: {
        r: 1,
        g: 0.980392,
        b: 0.803922,
    },
    lightblue: {
        r: 0.678431,
        g: 0.847059,
        b: 0.901961,
    },
    lightcoral: {
        r: 0.941176,
        g: 0.501961,
        b: 0.501961,
    },
    lightcyan: {
        r: 0.878431,
        g: 1,
        b: 1,
    },
    lightgoldenrodyellow: {
        r: 0.980392,
        g: 0.980392,
        b: 0.823529,
    },
    lightgray: {
        r: 0.827451,
        g: 0.827451,
        b: 0.827451,
    },
    lightgreen: {
        r: 0.564706,
        g: 0.933333,
        b: 0.564706,
    },
    lightgrey: {
        r: 0.827451,
        g: 0.827451,
        b: 0.827451,
    },
    lightpink: {
        r: 1,
        g: 0.713725,
        b: 0.756863,
    },
    lightsalmon: {
        r: 1,
        g: 0.627451,
        b: 0.478431,
    },
    lightseagreen: {
        r: 0.12549,
        g: 0.698039,
        b: 0.666667,
    },
    lightskyblue: {
        r: 0.529412,
        g: 0.807843,
        b: 0.980392,
    },
    lightslategray: {
        r: 0.466667,
        g: 0.533333,
        b: 0.6,
    },
    lightslategrey: {
        r: 0.466667,
        g: 0.533333,
        b: 0.6,
    },
    lightsteelblue: {
        r: 0.690196,
        g: 0.768627,
        b: 0.870588,
    },
    lightyellow: {
        r: 1,
        g: 1,
        b: 0.878431,
    },
    lime: {
        r: 0,
        g: 1,
        b: 0,
    },
    limegreen: {
        r: 0.196078,
        g: 0.803922,
        b: 0.196078,
    },
    linen: {
        r: 0.980392,
        g: 0.941176,
        b: 0.901961,
    },
    magenta: {
        r: 1,
        g: 0,
        b: 1,
    },
    maroon: {
        r: 0.501961,
        g: 0,
        b: 0,
    },
    mediumaquamarine: {
        r: 0.4,
        g: 0.803922,
        b: 0.666667,
    },
    mediumblue: {
        r: 0,
        g: 0,
        b: 0.803922,
    },
    mediumorchid: {
        r: 0.729412,
        g: 0.333333,
        b: 0.827451,
    },
    mediumpurple: {
        r: 0.576471,
        g: 0.439216,
        b: 0.858824,
    },
    mediumseagreen: {
        r: 0.235294,
        g: 0.701961,
        b: 0.443137,
    },
    mediumslateblue: {
        r: 0.482353,
        g: 0.407843,
        b: 0.933333,
    },
    mediumspringgreen: {
        r: 0,
        g: 0.980392,
        b: 0.603922,
    },
    mediumturquoise: {
        r: 0.282353,
        g: 0.819608,
        b: 0.8,
    },
    mediumvioletred: {
        r: 0.780392,
        g: 0.082353,
        b: 0.521569,
    },
    midnightblue: {
        r: 0.098039,
        g: 0.098039,
        b: 0.439216,
    },
    mintcream: {
        r: 0.960784,
        g: 1,
        b: 0.980392,
    },
    mistyrose: {
        r: 1,
        g: 0.894118,
        b: 0.882353,
    },
    moccasin: {
        r: 1,
        g: 0.894118,
        b: 0.709804,
    },
    navajowhite: {
        r: 1,
        g: 0.870588,
        b: 0.678431,
    },
    navy: {
        r: 0,
        g: 0,
        b: 0.501961,
    },
    oldlace: {
        r: 0.992157,
        g: 0.960784,
        b: 0.901961,
    },
    olive: {
        r: 0.501961,
        g: 0.501961,
        b: 0,
    },
    olivedrab: {
        r: 0.419608,
        g: 0.556863,
        b: 0.137255,
    },
    orange: {
        r: 1,
        g: 0.647059,
        b: 0,
    },
    orangered: {
        r: 1,
        g: 0.270588,
        b: 0,
    },
    orchid: {
        r: 0.854902,
        g: 0.439216,
        b: 0.839216,
    },
    palegoldenrod: {
        r: 0.933333,
        g: 0.909804,
        b: 0.666667,
    },
    palegreen: {
        r: 0.596078,
        g: 0.984314,
        b: 0.596078,
    },
    paleturquoise: {
        r: 0.686275,
        g: 0.933333,
        b: 0.933333,
    },
    palevioletred: {
        r: 0.858824,
        g: 0.439216,
        b: 0.576471,
    },
    papayawhip: {
        r: 1,
        g: 0.937255,
        b: 0.835294,
    },
    peachpuff: {
        r: 1,
        g: 0.854902,
        b: 0.72549,
    },
    peru: {
        r: 0.803922,
        g: 0.521569,
        b: 0.247059,
    },
    pink: {
        r: 1,
        g: 0.752941,
        b: 0.796078,
    },
    plum: {
        r: 0.866667,
        g: 0.627451,
        b: 0.866667,
    },
    powderblue: {
        r: 0.690196,
        g: 0.878431,
        b: 0.901961,
    },
    purple: {
        r: 0.501961,
        g: 0,
        b: 0.501961,
    },
    red: {
        r: 1,
        g: 0,
        b: 0,
    },
    rosybrown: {
        r: 0.737255,
        g: 0.560784,
        b: 0.560784,
    },
    royalblue: {
        r: 0.254902,
        g: 0.411765,
        b: 0.882353,
    },
    saddlebrown: {
        r: 0.545098,
        g: 0.270588,
        b: 0.07451,
    },
    salmon: {
        r: 0.980392,
        g: 0.501961,
        b: 0.447059,
    },
    sandybrown: {
        r: 0.956863,
        g: 0.643137,
        b: 0.376471,
    },
    seagreen: {
        r: 0.180392,
        g: 0.545098,
        b: 0.341176,
    },
    seashell: {
        r: 1,
        g: 0.960784,
        b: 0.933333,
    },
    sienna: {
        r: 0.627451,
        g: 0.321569,
        b: 0.176471,
    },
    silver: {
        r: 0.752941,
        g: 0.752941,
        b: 0.752941,
    },
    skyblue: {
        r: 0.529412,
        g: 0.807843,
        b: 0.921569,
    },
    slateblue: {
        r: 0.415686,
        g: 0.352941,
        b: 0.803922,
    },
    slategray: {
        r: 0.439216,
        g: 0.501961,
        b: 0.564706,
    },
    slategrey: {
        r: 0.439216,
        g: 0.501961,
        b: 0.564706,
    },
    snow: {
        r: 1,
        g: 0.980392,
        b: 0.980392,
    },
    springgreen: {
        r: 0,
        g: 1,
        b: 0.498039,
    },
    steelblue: {
        r: 0.27451,
        g: 0.509804,
        b: 0.705882,
    },
    tan: {
        r: 0.823529,
        g: 0.705882,
        b: 0.54902,
    },
    teal: {
        r: 0,
        g: 0.501961,
        b: 0.501961,
    },
    thistle: {
        r: 0.847059,
        g: 0.74902,
        b: 0.847059,
    },
    tomato: {
        r: 1,
        g: 0.388235,
        b: 0.278431,
    },
    transparent: {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
    },
    turquoise: {
        r: 0.25098,
        g: 0.878431,
        b: 0.815686,
    },
    violet: {
        r: 0.933333,
        g: 0.509804,
        b: 0.933333,
    },
    wheat: {
        r: 0.960784,
        g: 0.870588,
        b: 0.701961,
    },
    white: {
        r: 1,
        g: 1,
        b: 1,
    },
    whitesmoke: {
        r: 0.960784,
        g: 0.960784,
        b: 0.960784,
    },
    yellow: {
        r: 1,
        g: 1,
        b: 0,
    },
    yellowgreen: {
        r: 0.603922,
        g: 0.803922,
        b: 0.196078,
    },
};

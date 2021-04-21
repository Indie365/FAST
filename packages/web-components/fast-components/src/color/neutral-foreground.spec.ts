import { parseColorHexRGB } from "@microsoft/fast-colors";
import { expect } from "chai";
import { PaletteRGB } from "../color-2/palette";
import { neutralForeground } from "../color-2/recipes/neutral-foreground";
import { SwatchRGB } from "../color-2/swatch";
import { fastDesignSystemDefaults } from "../fast-design-system";
import { neutralBaseColor } from "./color-constants";
import { contrast } from "./common";
import {
    neutralForegroundActive,
    neutralForegroundHover,
    neutralForegroundRest
} from "./neutral-foreground";

describe("neutralForeground", (): void => {
    it("should return a string when invoked with an object", (): void => {
        expect(typeof neutralForegroundRest(fastDesignSystemDefaults)).to.equal("string");
        expect(typeof neutralForegroundHover(fastDesignSystemDefaults)).to.equal(
            "string"
        );
        expect(typeof neutralForegroundActive(fastDesignSystemDefaults)).to.equal(
            "string"
        );
    });

    it("should return a function when invoked with a function", (): void => {
        expect(typeof neutralForegroundRest(() => "#FFF")).to.equal("function");
        expect(typeof neutralForegroundHover(() => "#FFF")).to.equal("function");
        expect(typeof neutralForegroundActive(() => "#FFF")).to.equal("function");
    });

    it("should return a function when invoked with a string", (): void => {
        expect(typeof neutralForegroundRest("#FFF")).to.equal("function");
        expect(typeof neutralForegroundHover("#FFF")).to.equal("function");
        expect(typeof neutralForegroundActive("#FFF")).to.equal("function");
    });

    it("should operate on default design system if no design system is supplied", (): void => {
        const palette = fastDesignSystemDefaults.neutralPalette;
        const limitColor = palette[palette.length - 1];

        expect(contrast(neutralForegroundRest(undefined as any), limitColor)).to.be.gte(
            14
        );
        expect(
            contrast(
                neutralForegroundRest(() => undefined as any)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);
        expect(
            contrast(
                neutralForegroundRest(() => limitColor)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);
        expect(
            contrast(
                neutralForegroundRest(() => limitColor)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);

        expect(contrast(neutralForegroundHover(undefined as any), limitColor)).to.be.gte(
            14
        );
        expect(
            contrast(
                neutralForegroundHover(() => undefined as any)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);
        expect(
            contrast(
                neutralForegroundHover(() => limitColor)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);
        expect(
            contrast(
                neutralForegroundHover(() => limitColor)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);

        expect(contrast(neutralForegroundActive(undefined as any), limitColor)).to.be.gte(
            14
        );
        expect(
            contrast(
                neutralForegroundActive(() => undefined as any)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);
        expect(
            contrast(
                neutralForegroundActive(() => limitColor)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);
        expect(
            contrast(
                neutralForegroundActive(() => limitColor)(undefined as any),
                limitColor
            )
        ).to.be.gte(14);
    });

    it("should return correct result with default design system values", (): void => {
        expect(
            contrast(
                neutralForegroundRest(fastDesignSystemDefaults),
                fastDesignSystemDefaults.neutralPalette[
                    fastDesignSystemDefaults.neutralPalette.length - 1
                ]
            )
        ).to.be.gte(14);
    });

    it("should return #FFFFFF with a dark background", (): void => {
        expect(
            contrast(
                neutralForegroundRest(
                    Object.assign({}, fastDesignSystemDefaults, {
                        backgroundColor: "#000",
                    })
                ),
                "#000"
            )
        ).to.be.gte(14);
    });
});

describe("ensure parity between old and new recipe implementation", () => {
    const color = (parseColorHexRGB(neutralBaseColor)!)
    const palette = new PaletteRGB(new SwatchRGB(color.r, color.g, color.b));
    palette.swatches.forEach(( newSwatch, index ) => {
            it(`should be the same for ${newSwatch}`, () => {
                expect(neutralForegroundRest({...fastDesignSystemDefaults, backgroundColor: fastDesignSystemDefaults.neutralPalette[index]})).to.be.equal(neutralForeground( palette, newSwatch).toColorString().toUpperCase())
        });
    })
})
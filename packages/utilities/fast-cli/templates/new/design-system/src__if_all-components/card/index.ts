import {
    composedParent,
    Card as FoundationCard,
    cardTemplate as template,
} from "@microsoft/fast-foundation";
import { Swatch } from "../color/swatch";
import { fillColor, neutralFillLayerRecipe } from "../design-tokens";
import { cardStyles as styles } from "./card.styles";

/**
 * @internal
 */
export class Card extends FoundationCard {
    connectedCallback() {
        super.connectedCallback();

        const parent = composedParent(this);

        if (parent) {
            fillColor.setValueFor(
                this,
                (target: HTMLElement): Swatch =>
                    neutralFillLayerRecipe
                        .getValueFor(target)
                        .evaluate(target, fillColor.getValueFor(parent))
            );
        }
    }
}

/**
 * A function that returns a Card registration for configuring the component with a DesignSystem.
 * Implements Card
 *
 * @public
 * @remarks
 * Generates HTML Element: \</* @echo namespace */-card\>
 */
export const /* @echo namespace */Card = Card.compose({
    baseName: "card",
    template,
    styles,
});

/**
 * Styles for Card
 * @public
 */
export const cardStyles = styles;

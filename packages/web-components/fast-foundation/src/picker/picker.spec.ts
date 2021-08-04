import { expect } from "chai";
import {     
    Picker,
    PickerList,
    PickerListItem,
    pickerListItemTemplate,
    pickerListTemplate,
    PickerMenu,
    PickerMenuOption,
    pickerMenuOptionTemplate,
    pickerMenuTemplate,
    pickerTemplate, 
} from "./index";
import { fixture } from "../test-utilities/fixture";

const FASTPicker = Picker.compose({
    baseName: "picker",
    template: pickerTemplate
})

const FASTPickerList = PickerList.compose({
    baseName: "picker-list",
    template: pickerListTemplate
})

const FASTPickerListItem = PickerListItem.compose({
    baseName: "picker-list-item",
    template: pickerListItemTemplate
})

const FASTPickerMenu = PickerMenu.compose({
    baseName: "picker-menu",
    template: pickerMenuTemplate
})

const FASTPickerMenuOption = PickerMenuOption.compose({
    baseName: "picker-menu-option",
    template: pickerMenuOptionTemplate
})


async function setupPicker() {
    const { element, connect, disconnect } = await fixture(FASTPicker());

    return { element, connect, disconnect };
}

async function setupPickerList() {
    const { element, connect, disconnect } = await fixture(FASTPickerList());

    return { element, connect, disconnect };
}

async function setupPickerListItem() {
    const { element, connect, disconnect } = await fixture(FASTPickerListItem());

    return { element, connect, disconnect };
}

async function setupPickerMenu() {
    const { element, connect, disconnect } = await fixture(FASTPickerMenu());

    return { element, connect, disconnect };
}

async function setupPickerMenuOption() {
    const { element, connect, disconnect } = await fixture(FASTPickerMenuOption());

    return { element, connect, disconnect };
}



describe("Picker", () => {

    /**
     *  Picker-list tests
     */
    it("picker list should include a role of `list`", async () => {
        const { element, connect, disconnect } = await setupPickerList();

        await connect();

        expect(element.getAttribute("role")).to.equal("list");

        await disconnect();
    });


    /**
     *  Picker-menu tests
     */
    it("picker menu should include a role of `list`", async () => {
        const { element, connect, disconnect } = await setupPickerList();
    
        await connect();
    
        expect(element.getAttribute("role")).to.equal("list");
    
        await disconnect();
    });
});

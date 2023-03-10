---
id: fast-foundation.menuitem
title: MenuItem class
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-foundation](./fast-foundation.md) &gt; [MenuItem](./fast-foundation.menuitem.md)

## MenuItem class

A Switch Custom HTML Element. Implements [ARIA menuitem](https://www.w3.org/TR/wai-aria-1.1/#menuitem)<!-- -->, [ARIA menuitemcheckbox](https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox)<!-- -->, or [ARIA menuitemradio](https://www.w3.org/TR/wai-aria-1.1/#menuitemradio)<!-- -->.


checked-indicator - The checked indicator


radio-indicator - The radio indicator


start - Content which can be provided before the menu item content


end - Content which can be provided after the menu item content


- The default slot for menu item content


expand-collapse-indicator - The expand/collapse indicator


submenu - Used to nest menu's within menu items


input-container - The element representing the visual checked or radio indicator


checkbox - The element wrapping the `menuitemcheckbox` indicator


radio - The element wrapping the `menuitemradio` indicator


content - The element wrapping the menu item content


expand-collapse-glyph-container - The element wrapping the expand collapse element


expand-collapse - The expand/collapse element


submenu-region - The container for the submenu, used for positioning


expanded-change - Fires a custom 'expanded-change' event when the expanded state changes


change - Fires a custom 'change' event when a non-submenu item with a role of `menuitemcheckbox`<!-- -->, `menuitemradio`<!-- -->, or `menuitem` is invoked

<b>Signature:</b>

```typescript
export declare class MenuItem extends FoundationElement 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [checked](./fast-foundation.menuitem.checked.md) |  | boolean | The checked value of the element. |
|  [disabled](./fast-foundation.menuitem.disabled.md) |  | boolean | The disabled state of the element. |
|  [expanded](./fast-foundation.menuitem.expanded.md) |  | boolean | The expanded state of the element. |
|  [role](./fast-foundation.menuitem.role.md) |  | [MenuItemRole](./fast-foundation.menuitemrole.md) | The role of the element. |

import { html } from "@microsoft/fast-element";
import type { BreadcrumbItem } from "@microsoft/fast-foundation";
import type { Args, Meta } from "@storybook/html";
import { renderComponent } from "../storybook-helpers.js";

const componentTemplate = html<BreadcrumbItem & Args>`
    <fast-breadcrumb-item href="${x => x.href || null}">
        ${x => x.content}
    </fast-breadcrumb-item>
`;

export default {
    title: "Breadcrumb Item",
    args: {
        href: "#",
        content: "Breadcrumb item",
    },
} as Meta<BreadcrumbItem>;

export const Primary = renderComponent(componentTemplate).bind({});

export const WithoutHref = renderComponent(componentTemplate).bind({});
WithoutHref.args = {
    href: null,
};

export const WithStartSlotedContent = renderComponent(componentTemplate).bind({});
WithStartSlotedContent.args = {
    content: html`
        Breadcrumb item
        <svg slot="start" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.5 7.7h-1v-1h1v1zm4.1 0h-1v-1h1v1zm4.1-1v2.1h-1v2.6l-.1.6-.3.5c-.1.1-.3.3-.5.3l-.6.1H10l-3.5 3v-3H3.9l-.6-.1-.5-.3c-.1-.1-.3-.3-.3-.5l-.1-.6V8.8h-1V6.7h1V5.2l.1-.6.3-.5c.1-.1.3-.3.5-.3l.6-.1h3.6V1.9a.8.8 0 01-.4-.4L7 1V.6l.2-.3.3-.2L8 0l.4.1.3.2.3.3V1l-.1.5-.4.4v1.7h3.6l.6.1.5.3c.1.1.3.3.3.5l.1.6v1.5h1.1zm-2.1-1.5l-.2-.4-.4-.2H3.9l-.4.2-.1.4v6.2l.2.4.4.2h3.6v1.8L9.7 12h2.5l.4-.2.2-.4V5.2zM5.8 8.9l1 .7 1.2.2a5 5 0 001.2-.2l1-.7.7.7c-.4.4-.8.7-1.4.9-.5.2-1 .3-1.6.3s-1.1-.1-1.6-.3A3 3 0 015 9.6l.8-.7z"
            />
        </svg>
    `,
};

export const WithEndSlottedContent = renderComponent(componentTemplate).bind({});
WithEndSlottedContent.args = {
    content: html`
        Breadcrumb item
        <svg slot="end" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.5 7.7h-1v-1h1v1zm4.1 0h-1v-1h1v1zm4.1-1v2.1h-1v2.6l-.1.6-.3.5c-.1.1-.3.3-.5.3l-.6.1H10l-3.5 3v-3H3.9l-.6-.1-.5-.3c-.1-.1-.3-.3-.3-.5l-.1-.6V8.8h-1V6.7h1V5.2l.1-.6.3-.5c.1-.1.3-.3.5-.3l.6-.1h3.6V1.9a.8.8 0 01-.4-.4L7 1V.6l.2-.3.3-.2L8 0l.4.1.3.2.3.3V1l-.1.5-.4.4v1.7h3.6l.6.1.5.3c.1.1.3.3.3.5l.1.6v1.5h1.1zm-2.1-1.5l-.2-.4-.4-.2H3.9l-.4.2-.1.4v6.2l.2.4.4.2h3.6v1.8L9.7 12h2.5l.4-.2.2-.4V5.2zM5.8 8.9l1 .7 1.2.2a5 5 0 001.2-.2l1-.7.7.7c-.4.4-.8.7-1.4.9-.5.2-1 .3-1.6.3s-1.1-.1-1.6-.3A3 3 0 015 9.6l.8-.7z"
            />
        </svg>
    `,
};

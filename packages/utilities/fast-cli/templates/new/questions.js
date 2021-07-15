module.exports = [
  {
    name: 'What kind of project would you like to build today?',
    choices: [
      {value: 'app', title: 'App', description: 'Build a starter FAST Application'},
      {value: 'design-system', title: 'Design System', description: 'Build a new design system'},
    ],
  },
  {
    name: 'author',
    message: 'Who is the author?',
  },
  {
    name: 'namespace',
    message: 'What would you like your namespace prefix to be?',
  },
  {
    if: 'design-system',
    message: 'Would you like to include all components?',
    choices: [
      {value: 'all-components', title: 'Yes'},
      {value: 'select-components', title: 'No'},
    ],
  },
  {
    if: 'select-components',
    multiple: true,
    message: 'Select components',
    choices: [
      {value: 'accordion', title: 'Accordion'},
      {value: 'anchor', title: 'Anchor'},
      {value: 'anchored-region', title: 'Anchored Region'},
      {value: 'badge', title: 'Badge'},
      {value: 'breadcrumb', title: 'Breadcrumb'},
      {value: 'breadcrumb-item', title: 'Breadcrumb Item'},
      {value: 'button', title: 'Button'},
      {value: 'card', title: 'Card'},
      {value: 'checkbox', title: 'Checkbox'},
      {value: 'combobox', title: 'Combobox'},
      {value: 'data-grid', title: 'Data Grid'},
      {value: 'design-system-provider', title: 'Design System Provider'},
      {value: 'dialog', title: 'Dialog'},
      {value: 'disclosure', title: 'Disclosure'},
      {value: 'divider', title: 'Divider'},
      {value: 'flipper', title: 'Flipper'},
      {value: 'horizontal-scroll', title: 'Horizontal Scroll'},
      {value: 'listbox', title: 'Listbox'},
      {value: 'listbox-option', title: 'Listbox Option'},
      {value: 'menu', title: 'Menu'},
      {value: 'menu-item', title: 'Menu Item'},
      {value: 'number-field', title: 'Number Field'},
      {value: 'progress', title: 'Progress'},
      {value: 'progress-ring', title: 'Progress Ring'},
      {value: 'radio', title: 'Radio'},
      {value: 'radio-group', title: 'Radio Group'},
      {value: 'select', title: 'Select'},
      {value: 'skeleton', title: 'Skeleton'},
      {value: 'slider', title: 'Slider'},
      {value: 'slider-label', title: 'Slider label'},
      {value: 'switch', title: 'Switch'},
      {value: 'tabs', title: 'Tabs'},
      {value: 'text-area', title: 'Text Area'},
      {value: 'text-field', title: 'Text Field'},
      {value: 'toolbar', title: 'Toolbar'},
      {value: 'tooltip', title: 'Tooltip'},
      {value: 'tree-view', title: 'Tree View'},
      {value: 'tree-item', title: 'Tree Item'},
    ],
  },
]

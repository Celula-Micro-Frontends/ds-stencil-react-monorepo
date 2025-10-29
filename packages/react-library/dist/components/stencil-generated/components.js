'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { InputComponent as InputComponentElement, defineCustomElement as defineInputComponent } from "stencil-library/dist/components/input-component.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "stencil-library/dist/components/my-component.js";
import { TestComponent as TestComponentElement, defineCustomElement as defineTestComponent } from "stencil-library/dist/components/test-component.js";
import { TooltipComponent as TooltipComponentElement, defineCustomElement as defineTooltipComponent } from "stencil-library/dist/components/tooltip-component.js";
export const InputComponent = createComponent({
    tagName: 'input-component',
    elementClass: InputComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineInputComponent
});
export const MyComponent = createComponent({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineMyComponent
});
export const TestComponent = createComponent({
    tagName: 'test-component',
    elementClass: TestComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineTestComponent
});
export const TooltipComponent = createComponent({
    tagName: 'tooltip-component',
    elementClass: TooltipComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineTooltipComponent
});
//# sourceMappingURL=components.js.map
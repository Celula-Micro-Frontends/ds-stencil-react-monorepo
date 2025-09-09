'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { InputComponent as InputComponentElement, defineCustomElement as defineInputComponent } from "stencil-library/dist/components/input-component.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "stencil-library/dist/components/my-component.js";
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
//# sourceMappingURL=components.js.map
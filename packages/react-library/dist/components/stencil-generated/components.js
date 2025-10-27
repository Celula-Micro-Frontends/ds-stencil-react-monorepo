'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { InputComponent as InputComponentElement, defineCustomElement as defineInputComponent } from "stencil-library/dist/components/input-component.js";
import { ModalComponent as ModalComponentElement, defineCustomElement as defineModalComponent } from "stencil-library/dist/components/modal-component.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "stencil-library/dist/components/my-component.js";
import { TestComponent as TestComponentElement, defineCustomElement as defineTestComponent } from "stencil-library/dist/components/test-component.js";
export const InputComponent = createComponent({
    tagName: 'input-component',
    elementClass: InputComponentElement,
    react: React,
    events: { onInputTarget: 'inputTarget' },
    defineCustomElement: defineInputComponent
});
export const ModalComponent = createComponent({
    tagName: 'modal-component',
    elementClass: ModalComponentElement,
    react: React,
    events: { onModalClosed: 'modalClosed' },
    defineCustomElement: defineModalComponent
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
//# sourceMappingURL=components.js.map
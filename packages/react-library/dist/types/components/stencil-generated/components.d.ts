import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { InputComponent as InputComponentElement } from "stencil-library/dist/components/input-component.js";
import { ModalComponent as ModalComponentElement } from "stencil-library/dist/components/modal-component.js";
import { MyComponent as MyComponentElement } from "stencil-library/dist/components/my-component.js";
import { TestComponent as TestComponentElement } from "stencil-library/dist/components/test-component.js";
export type InputComponentEvents = {
    onInputTarget: EventName<CustomEvent<{
        name: string;
        value: string;
    }>>;
};
export declare const InputComponent: StencilReactComponent<InputComponentElement, InputComponentEvents>;
export type ModalComponentEvents = {
    onModalClosed: EventName<CustomEvent<void>>;
};
export declare const ModalComponent: StencilReactComponent<ModalComponentElement, ModalComponentEvents>;
export type MyComponentEvents = NonNullable<unknown>;
export declare const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents>;
export type TestComponentEvents = NonNullable<unknown>;
export declare const TestComponent: StencilReactComponent<TestComponentElement, TestComponentEvents>;

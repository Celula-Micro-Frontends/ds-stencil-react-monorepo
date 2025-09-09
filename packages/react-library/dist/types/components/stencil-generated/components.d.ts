import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { InputComponent as InputComponentElement } from "stencil-library/dist/components/input-component.js";
import { MyComponent as MyComponentElement } from "stencil-library/dist/components/my-component.js";
export type InputComponentEvents = NonNullable<unknown>;
export declare const InputComponent: StencilReactComponent<InputComponentElement, InputComponentEvents>;
export type MyComponentEvents = NonNullable<unknown>;
export declare const MyComponent: StencilReactComponent<MyComponentElement, MyComponentEvents>;

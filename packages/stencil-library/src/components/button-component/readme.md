# button-component

<!-- Auto Generated Below -->

## Properties

| Property                | Attribute     | Description                                                          | Type                                                                                 | Default                  |
| ----------------------- | ------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------ |
| `disabled`              | `disabled`    | The disabled state of the button.                                    | `boolean`                                                                            | `false`                  |
| `heading`               | `heading`     | The type of the button. BUTTON, SUBMIT, RESET.                       | `string`                                                                             | `undefined`              |
| `htmlIndex`             | `html-index`  | The html index of the button.                                        | `number`                                                                             | `0`                      |
| `idButton` _(required)_ | `id-button`   | The id of the button.                                                | `string`                                                                             | `undefined`              |
| `loading`               | `loading`     | Show loading state in the button.                                    | `boolean`                                                                            | `false`                  |
| `name`                  | `name`        | The name of the button.                                              | `string`                                                                             | `undefined`              |
| `prefixIcon`            | `prefix-icon` | The prefix icon of the button.                                       | `string`                                                                             | `undefined`              |
| `size`                  | `size`        | The size of the button. PRIMARY, SECONDARY, TERTIARY, BORDERLESS.    | `"large" \| "regular" \| "small" \| "x-small"`                                       | `SIZE_BUTTON.REGULAR`    |
| `suffixIcon`            | `suffix-icon` | The suffix icon of the button.                                       | `string`                                                                             | `undefined`              |
| `type`                  | `type`        | The type of the button. BUTTON, SUBMIT, RESET.                       | `"button" \| "reset" \| "submit"`                                                    | `TYPE_BUTTON.SUBMIT`     |
| `variant`               | `variant`     | The variant of the button. PRIMARY, SECONDARY, TERTIARY, BORDERLESS. | `"primary" \| "secondary" \| "text-hiperlink" \| "text-primary" \| "text-secondary"` | `VARIANT_BUTTON.PRIMARY` |
| `widthMode`             | `width-mode`  | The mode width button default \| full.                               | `"default" \| "full"`                                                                | `WIDTH_MODE.DEFAULT`     |


## Events

| Event         | Description                                   | Type                           |
| ------------- | --------------------------------------------- | ------------------------------ |
| `buttonClick` | The event emitted when the button is clicked. | `CustomEvent<{ id: string; }>` |


import { Component, Prop, h } from '@stencil/core';
import './datePicker-component.css';
import CalendarDefaultIcon from '../../assets/images/CalendarIcon.svg';

interface datepickerParameters {
  id: string;
  class: string;
  //noIcon, iconLeft, iconRight
  icon?: any;
  CalendarIcon?: any;
  label: string;
  text_error: string;
  min: string;
  max: string;
  value: string;
  required: boolean;
  readonly: boolean;
  disabled: boolean;
  onChange: (data) => {};
}
@Component({
  tag: 'datepicker-component',
  styleUrl: 'datePicker-component.css',
  shadow: true,
})
export class DatePickerComponent {
  @Prop() datepickersData: datepickerParameters[];
  @Prop() range: boolean;

  render() {
    const { range, datepickersData } = this;
    const customIconStyles = {
      'background-image': `url(${datepickersData[0].CalendarIcon ? datepickersData[0].CalendarIcon : CalendarDefaultIcon})`,
      'background-size': '25px',
      'background-repeat': 'no-repeat',
    };

    return (
      <div class={`container-datePicker-component`}>
        {datepickersData?.slice(0, range ? 2 : undefined).map((datePicker: datepickerParameters) => (
          <div key={datePicker.id} class="container-datePicker">
            {datePicker.label && (
              <label htmlFor="1" class="datePicker-label">
                {datePicker.label}
              </label>
            )}
            <input
              type="date"
              id={datePicker.id}
              class={`datePicker-input ${datePicker.class}`}
              style={datePicker.icon ? customIconStyles : {}}
              onInput={(event: any) => {
                datePicker.onChange({ datepickerId: datePicker.id, value: event.target?.value });
              }}
              required={datePicker.required}
              readonly={datePicker.readonly}
              disabled={datePicker.disabled}
              min={datePicker.min}
              max={datePicker.max}
              value={datePicker.value}
              onFocus={event => {
                if (!datePicker.readonly) {
                  const datePickerInput = event.target as HTMLInputElement;
                  datePickerInput.showPicker();
                }
              }}
            />
            {datePicker.value < datePicker.min && <label class="label-error">{datePicker.text_error}</label>}
          </div>
        ))}
      </div>
    );
  }
}

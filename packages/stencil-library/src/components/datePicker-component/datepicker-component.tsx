import { Component, h, Prop } from '@stencil/core';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';

import CalendarDefaultIcon from '../../assets/images/CalendarIcon.svg';

interface datepickerParameters {
  id: string;
  class: string;
  label: string;
  placeHolder: string;
  value: string;
  min: string;
  max: string;
  text_error?: string;
  range?: boolean;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onChange: (data) => {};
}

@Component({
  tag: 'datepicker-component',
  styleUrl: 'datePicker-component.css',
  shadow: true,
})
export class DatePickerComponent {
  @Prop({ mutable: true }) datepickersData: datepickerParameters[];
  @Prop() icon?: string = '';
  @Prop() dateFormat?: string = 'Y-m-d';
  @Prop() orientation?: string = 'row';

  render() {
    const { datepickersData, icon, dateFormat, orientation } = this;
    const iconToRender = icon !== '' ? icon : CalendarDefaultIcon;
    const customIconStyles = {
      'background-image': `url(${iconToRender})`,
      'background-size': '25px',
      'background-repeat': 'no-repeat',
    };
    const inputElements: HTMLInputElement[] = [];
    const fpInstances: flatpickr.Instance[] = [];

    setTimeout(() => {
      this.datepickersData.forEach(({ value, onChange, min, max, range }, index) => {
        fpInstances[index] = flatpickr(inputElements[index], {
          dateFormat,
          locale: Spanish,
          defaultDate: value,
          minDate: min,
          maxDate: max,
          mode: range ? 'range' : 'single',
          onChange: selectedDates => {
            const initialDateRange = selectedDates[0]?.toISOString().slice(0, 10) || undefined;
            const finalDateRange = range ? selectedDates[1]?.toISOString().slice(0, 10) : undefined;
            value = `${initialDateRange} ${range ? `a ${finalDateRange}` : ''}`;
            if (!range || (range && initialDateRange && finalDateRange)) {
              onChange(value);
            }
          },
        });
      });
    }, 100);

    return (
      <div
        class="datePicker-component-container"
        style={{
          'flex-direction': orientation,
          'justify-content': orientation === 'row' ? 'space-between' : '',
        }}
      >
        {datepickersData.map(datePicker => {
          return (
            <div key={datePicker.id} class="container-datePicker">
              {datePicker.label && (
                <label htmlFor="1" class="datePicker-label">
                  {datePicker.label}
                </label>
              )}
              <input
                ref={el => inputElements.push(el as HTMLInputElement)}
                type="text"
                placeholder={datePicker.placeHolder}
                class={`datePicker-input ${icon ? 'iconRight' : 'noDefaultIcon'} ${datePicker.class}`}
                style={icon ? customIconStyles : {}}
                required={datePicker.required}
                readonly={datePicker.readonly}
                disabled={datePicker.disabled}
              />
              {datePicker.text_error && <label class="label-error">{datePicker.text_error}</label>}
            </div>
          );
        })}
      </div>
    );
  }
}

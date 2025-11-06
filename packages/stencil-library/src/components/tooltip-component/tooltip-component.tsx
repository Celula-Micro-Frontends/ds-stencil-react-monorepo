import { Component, Element, Listen, Prop, State, h } from '@stencil/core';
import { TOOLTIP_ALIGNMENT, TooltipAlignment, ToolTipProps } from './tooltip-component.interface';

@Component({
  tag: 'tooltip-component',
  styleUrl: 'tooltip-component.scss',
  shadow: true,
})
export class TooltipComponent implements ToolTipProps {
  @Element() el: HTMLTooltipComponentElement;
  @Prop({ mutable: false }) text: string;
  @Prop({ mutable: false }) alignment: TooltipAlignment = TOOLTIP_ALIGNMENT.TOP;
  @State() internalAlignment: TooltipAlignment = TOOLTIP_ALIGNMENT.TOP;

  @Listen('mouseover')
  handleMouseOver() {
    const rectContent = this.el.shadowRoot.querySelector('.tooltip-content').getBoundingClientRect();
    const contentLeft = rectContent.left;

    const rectText = this.el.shadowRoot.querySelector('.tooltip-text').getBoundingClientRect();
    const textHeight = rectText.height;
    const textWidth = rectText.width;

    switch (this.alignment) {
      case TOOLTIP_ALIGNMENT.LEFT:
        const contentWidth = rectContent.width;
        const windowWidth = window.innerWidth;
        if (contentLeft + contentWidth + textWidth > windowWidth) {
          this.internalAlignment = TOOLTIP_ALIGNMENT.RIGHT;
        } else {
          this.internalAlignment = TOOLTIP_ALIGNMENT.LEFT;
        }
        break;
      case TOOLTIP_ALIGNMENT.RIGHT:
        if (contentLeft - textWidth < 0) {
          this.internalAlignment = TOOLTIP_ALIGNMENT.LEFT;
        } else {
          this.internalAlignment = TOOLTIP_ALIGNMENT.RIGHT;
        }
        break;
      case TOOLTIP_ALIGNMENT.TOP:
        const contentTop = rectContent.top;
        if (contentTop - textHeight < 0) {
          this.internalAlignment = TOOLTIP_ALIGNMENT.BOTTOM;
        } else {
          this.internalAlignment = TOOLTIP_ALIGNMENT.TOP;
        }
        break;
      case TOOLTIP_ALIGNMENT.BOTTOM:
        const contentBottom = rectContent.bottom;
        const contentHeight = rectContent.height;
        const windowHeight = window.innerHeight;
        if (contentBottom + contentHeight + textHeight > windowHeight) {
          this.internalAlignment = TOOLTIP_ALIGNMENT.TOP;
        } else {
          this.internalAlignment = TOOLTIP_ALIGNMENT.BOTTOM;
        }
        break;
      default:
        break;
    }
  }

  ComponentWillLoad() {
    this.internalAlignment = this.alignment;
  }

  render() {
    return (
      <div class="tooltip">
        <div class="tooltip-content">
          <slot></slot>
        </div>
        <div class={`tooltip-text tooltip-alignment-${this.internalAlignment}`}>
          <div class="tooltip-arrow">
            <div class="tooltip-arrow-bg"></div>
          </div>
          {this.text}
        </div>
      </div>
    );
  }
}

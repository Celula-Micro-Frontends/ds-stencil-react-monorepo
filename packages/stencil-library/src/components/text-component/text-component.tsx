import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'nd-text',
  styleUrl: 'text-component.css',
  shadow: true,
})
export class TextComponent  {

  @Prop() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'link' | 'error' | 'caption' | 'small' = 'p';

  @Prop() weight: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';

  @Prop() align: 'left' | 'center' | 'right' | 'justify' = 'left';

  @Prop() color?: string;

  @Prop() href?: string;

  @Prop() target?: '_blank' | '_self' | '_parent' | '_top' = '_self';

  @Prop() htmlFor?: string;

  @Prop() truncate: boolean = false;

  @Prop() maxLines?: number;

  @Prop() customClass?: string;

  @Prop() disabled: boolean = false;

  private getClasses(): string {
    const classes = [
      `text-${this.variant}`,
      `weight-${this.weight}`,
      `align-${this.align}`,
    ];

    if (this.truncate) {
      classes.push('truncate');
    }

    if (this.maxLines) {
      classes.push('line-clamp');
    }

    if (this.disabled) {
      classes.push('disabled');
    }

    if (this.customClass) {
      classes.push(this.customClass);
    }

    return classes.join(' ');
  }

  private getStyles(): { [key: string]: string } {
    const styles: { [key: string]: string } = {};

    if (this.color) {
      styles.color = this.color;
    }

    if (this.maxLines) {
      styles['-webkit-line-clamp'] = this.maxLines.toString();
    }

    return styles;
  }

  render() {
    const classes = this.getClasses();
    const styles = this.getStyles();
    const content = <slot />;

    switch (this.variant) {
      case 'h1':
        return <h1 class={classes} style={styles}>{content}</h1>;
      
      case 'h2':
        return <h2 class={classes} style={styles}>{content}</h2>;
      
      case 'h3':
        return <h3 class={classes} style={styles}>{content}</h3>;
      
      case 'h4':
        return <h4 class={classes} style={styles}>{content}</h4>;
      
      case 'h5':
        return <h5 class={classes} style={styles}>{content}</h5>;
      
      case 'h6':
        return <h6 class={classes} style={styles}>{content}</h6>;
      
      case 'label':
        return (
          <label class={classes} style={styles} htmlFor={this.htmlFor}>
            {content}
          </label>
        );
      
      case 'link':
        if (this.disabled) {
          return <span class={classes} style={styles}>{content}</span>;
        }
        return (
          <a 
            class={classes} 
            style={styles} 
            href={this.href} 
            target={this.target}
            rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            {content}
          </a>
        );
      
      case 'error':
        return (
          <span class={classes} style={styles} role="alert">
            {content}
          </span>
        );
      
      case 'caption':
        return <span class={classes} style={styles}>{content}</span>;
      
      case 'small':
        return <small class={classes} style={styles}>{content}</small>;
      
      case 'p':
      default:
        return <p class={classes} style={styles}>{content}</p>;
    }
  }
}
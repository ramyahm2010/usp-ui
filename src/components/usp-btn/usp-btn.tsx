import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'usp-btn',
  styleUrl: 'usp-btn.scss',
  shadow: true,
})
export class UspBtn {
  /**
   * Color token (e.g. "primary-500", "accent-100") or hex code (e.g. "#FF5733").
   */
  @Prop() color?: string;

  /**
   * Button size ("sm", "md", "lg").
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Variant of the button ("flat" or "outlined").
   */
  @Prop() variant: 'flat' | 'outlined' = 'flat';

  /**
   * Whether the button is disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * The HTML type of the button ("button", "submit", or "reset").
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Decide if the input color is a token (like "primary-500") or a raw hex (like "#FF5733").
   */
  private isTokenColor(color: string) {
    // A simple heuristic: check if the string is of the pattern `someName-someNumber`.
    // You could also store known tokens in a map for a robust check.
    return /.+-\d{1,3}$/.test(color);
  }

  private getColorStyle(): { [key: string]: string } {
    if (!this.color) return {};

    // Distinguish between color tokens and direct hex values
    const styleColor = this.isTokenColor(this.color)
      ? `var(--${this.color})`
      : this.color; // use as-is if it’s a hex (or other valid CSS color)

    if (this.variant === 'flat') {
      return {
        backgroundColor: styleColor,
        color: '#ffffff', // or pick a better contrast color
      };
    } else {
      return {
        backgroundColor: 'transparent',
        color: styleColor,
        borderColor: styleColor,
      };
    }
  }

  render() {
    const buttonClass = {
      [`size-${this.size}`]: true,
      [`variant-${this.variant}`]: true,
    };

    return (
      <Host>
        <button
          type={this.type}
          style={this.getColorStyle()}
          class={buttonClass}
          disabled={this.disabled}
        >
          <slot />
        </button>
      </Host>
    );
  }
}

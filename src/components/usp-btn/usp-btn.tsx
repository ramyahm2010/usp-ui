import { Component, h } from '@stencil/core';

@Component({
  tag: 'usp-btn',
  styleUrl: 'usp-btn.scss',
  shadow: true,
})
export class UspBtn {
  /**
   * Button type: 'button', 'submit', or 'reset'
   */
  // @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Button size: 'small', 'medium', 'large'
   */
  // @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button variant: 'primary', 'secondary', 'tertiary'
   */
  // @Prop() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  /**
   * Disabled state of the button
   */
  // @Prop() disabled: boolean = false;

  render() {
    return (
      <button
        class={{
          btn: true,
        }}
        type='button'
      >
        <slot />
      </button>
    //   <button
    //   class={{
    //     btn: true,
    //     [`btn-${this.size}`]: true,
    //     [`btn-${this.variant}`]: true,
    //   }}
    //   type={this.type}
    //   disabled={this.disabled}
    // >
    //   <slot />
    // </button>
    );
  }
}

import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'jds-button',
  styleUrl: 'jds-button.css',
  shadow: true,
})
export class JdsButton {
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger' | 'link' | 'dropdown' = 'primary';
  @Prop() solid: boolean = true;
  @Prop() customClass: string = '';
  @Prop() customStyle: { [key: string]: string };
  @Prop() size: 'lg' | 'md' | 'sm' | 'icon-lg' | 'icon-md' | 'icon-sm' = 'md';
  @Prop() disabled: boolean = false;
  @State() dropdownOpen: boolean = false;

  private toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  private getButtonClass() {
    return `jds-button  jds-button--${this.variant} jds-button--${this.size} ${this.customClass}`;
  }

  render() {
    return (
      <div class="relative">
        {this.variant === 'dropdown' ? (
          <h>
            <button onClick={() => this.toggleDropdown()} class={this.getButtonClass()} style={this.customStyle}>
              <slot></slot>
            </button>
            {this.dropdownOpen && (
              <div class="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="py-1" role="menu" aria-orientation="vertical">
                  <slot name="dropdown-items"></slot>
                </div>
              </div>
            )}
          </h>
        ) : (
          <button class={this.getButtonClass()} style={this.customStyle} disabled={this.disabled}>
            <slot></slot>
          </button>
        )}
      </div>
    );
  }
}

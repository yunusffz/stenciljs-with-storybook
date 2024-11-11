export default {
  title: 'Example/Button',
  render: args =>
    `<jds-button ${Object.entries(args)
      .map(([key, value]) => (value === true ? key : `${key}="${value}"`))
      .join(' ')}>${args.label}</jds-button>`,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Primary = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
};

export const Tertiary = {
  args: {
    label: 'Button',
    variant: 'tertiary',
    size: 'md',
    disabled: false,
  },
};

export const Danger = {
  args: {
    label: 'Button',
    variant: 'danger',
    size: 'md',
    disabled: false,
  },
};

export const Warning = {
  args: {
    label: 'Button',
    variant: 'warning',
    size: 'md',
    disabled: false,
  },
};

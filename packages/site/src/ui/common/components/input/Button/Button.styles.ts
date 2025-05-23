import type { ButtonSize, ButtonVariant } from '@peersyst/react-components';
import { Button } from '@peersyst/react-components';
import { darken, lighten } from '@peersyst/react-utils';
import styled, { css } from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import type { ButtonProps } from './Button.types';

const lgSize = css(
  () => css`
    height: 2.5rem;
    padding: 0 1.5rem;
  `,
);

const smSize = css(
  () => css`
    height: 2rem;
    padding: 0 0.875rem;
    font-weight: 500;
  `,
);

const buttonSizes: Record<ButtonSize, FlattenInterpolation<ThemeProps<DefaultTheme>>> = {
  lg: lgSize,
  sm: smSize,
};

const primaryStyles = css(({ theme }) => ({
  backgroundColor: theme.palette.primary,
  color: theme.palette.white,
  '&:hover': {
    filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
  },
  '&:active': {
    backgroundColor: darken(theme.palette.primary, 0.2),
  },
  '&:disabled': {
    backgroundColor: theme.palette.disabled,
  },
}));

const secondaryStyles = css(({ theme }) => ({
  color: theme.palette.primary,
  border: '1px solid currentColor',
  backgroundColor: 'transparent',
  '&:hover': {
    color: theme.palette.white,
    borderColor: theme.palette.primary,
    backgroundColor: theme.palette.primary,
  },
  '&:active': {
    color: theme.palette.white,
    borderColor: theme.palette.primary,
    backgroundColor: darken(theme.palette.primary, 0.2),
  },
  '&:disabled': {
    borderColor: theme.palette.disabled,
    color: theme.palette.disabled,
  },
}));

const tertiaryStyles = css(({ theme }) => ({
  color: theme.palette.primary,
  border: '1px solid transparent',
  backgroundColor: theme.palette.grey[100],
  '&:hover': {
    color: theme.palette.white,
    borderColor: theme.palette.primary,
    backgroundColor: theme.palette.primary,
  },
  '&:active': {
    color: theme.palette.white,
    borderColor: theme.palette.primary,
    backgroundColor: darken(theme.palette.primary, 0.2),
  },
  '&:disabled': {
    borderColor: theme.palette.disabled,
    color: theme.palette.disabled,
  },
}));

const textStyles = css(({ theme }) => ({
  color: theme.palette.accent,
  backgroundColor: 'transparent',
  '&:hover': {
    color: lighten(theme.palette.primary, 0.2),
  },
  '&:active': {
    color: lighten(theme.palette.primary, 0.4),
  },
  '&:disabled': {
    opacity: 0.4,
  },
}));

const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  text: textStyles,
  tertiary: tertiaryStyles,
};

export const ButtonRoot = styled(Button)<ButtonProps>(({ size = 'lg', variant = 'primary', theme }) => {
  return css`
    font-size: 0.875rem;
    border-radius: ${theme.roundedBorder};
    border: 0;
    font-weight: 600;
    ${buttonSizes[size]};
    text-transform: none;
    transition: all 0.3s;

    &.Loading {
      opacity: 1;
    }
    ${variantStyles[variant]};
  `;
});

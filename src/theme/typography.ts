import { fonts } from "./fonts";

export const typography = {
  h1: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: fonts.weight.bold,
  },
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: fonts.weight.semibold,
  },
  h3: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: fonts.weight.semibold,
  },
  h4: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: fonts.weight.medium,
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: fonts.weight.regular,
  },
  bodyMedium: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: fonts.weight.regular,
  },
  bodySmall: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: fonts.weight.regular,
  },
  caption: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: fonts.weight.regular,
  },
} as const;

const rem = (ratio: number) => 10 * ratio
const fontSmall = rem(1.2)
const fontBig = rem(1.5)
const fontTitle = rem(1.8)
const fontMedium = rem(1.3)
const fontMainTitle = rem(2.2)

export const cssMixins = {
  rem,
  fontSmall,
  fontBig,
  fontTitle,
  fontMedium,
  fontMainTitle,
  lineHeight: 1.48,
  radius: 6,
}

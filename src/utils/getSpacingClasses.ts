type SpacingValue = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null | undefined

type Spacing =
  | {
      paddingTop?: SpacingValue
      paddingBottom?: SpacingValue
      marginTop?: SpacingValue
      marginBottom?: SpacingValue
    }
  | null
  | undefined

export const getSpacingClasses = (spacing: Spacing): string[] => {
  if (!spacing) return []

  return [
    spacing.paddingTop && spacing.paddingTop !== 'none' && `padding-top-${spacing.paddingTop}`,
    spacing.paddingBottom &&
      spacing.paddingBottom !== 'none' &&
      `padding-bottom-${spacing.paddingBottom}`,
    spacing.marginTop && spacing.marginTop !== 'none' && `margin-top-${spacing.marginTop}`,
    spacing.marginBottom &&
      spacing.marginBottom !== 'none' &&
      `margin-bottom-${spacing.marginBottom}`,
  ].filter((className): className is string => Boolean(className))
}

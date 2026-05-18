// Design tokens — use these in StyleSheet contexts (SafeAreaView, Animated, etc.)
// For NativeWind className usage, see global.css @theme variables.

export const colors = {
  // Brand
  linguaPurple: '#6C4EF5',
  linguaDeep: '#5B3BF6',
  linguaBlue: '#4D88FF',
  linguaGreen: '#21C16B',

  // Semantic
  success: '#21C16B',
  warning: '#FFCB00',
  streak: '#FF8A00',
  error: '#FF4D4F',
  info: '#4D88FF',

  // Neutral
  foreground: '#001132',
  muted: '#6B7280',
  border: '#E5E7EB',
  surface: '#F6F7FB',
  canvas: '#FFFFFF',
} as const;

export const fontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

// Typography scale — fontSize (px) and lineHeight (px) pairs
// Use in StyleSheet when NativeWind type-- utilities aren't applicable
export const typography = {
  h1: { fontFamily: 'Poppins-Bold', fontSize: 32, lineHeight: 38 },
  h2: { fontFamily: 'Poppins-SemiBold', fontSize: 24, lineHeight: 31 },
  h3: { fontFamily: 'Poppins-SemiBold', fontSize: 20, lineHeight: 26 },
  h4: { fontFamily: 'Poppins-Medium', fontSize: 16, lineHeight: 22 },
  bodyLg: { fontFamily: 'Poppins-Regular', fontSize: 16, lineHeight: 26 },
  bodyMd: { fontFamily: 'Poppins-Regular', fontSize: 14, lineHeight: 22 },
  bodySm: { fontFamily: 'Poppins-Regular', fontSize: 13, lineHeight: 21 },
  caption: { fontFamily: 'Poppins-Regular', fontSize: 11, lineHeight: 15 },
} as const;

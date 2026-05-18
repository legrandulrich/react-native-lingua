// Simple className combiner for conditional NativeWind class composition
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

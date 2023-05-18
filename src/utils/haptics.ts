import * as Haptics from 'expo-haptics';

export const HapticFeedback = {
  impactHeavy: Haptics.ImpactFeedbackStyle.Heavy,
  impactLight: Haptics.ImpactFeedbackStyle.Light,
  impactMedium: Haptics.ImpactFeedbackStyle.Medium,
  notificationError: Haptics.NotificationFeedbackType.Error,
  notificationSuccess: Haptics.NotificationFeedbackType.Success,
  notificationWarning: Haptics.NotificationFeedbackType.Warning,
  selection: 'selection',
} as const;

export type HapticFeedbackType =
  (typeof HapticFeedback)[keyof typeof HapticFeedback];

const hapticToTrigger = (haptic: HapticFeedbackType) => {
  if (haptic === 'selection') {
    return {
      [haptic]: () => Haptics.selectionAsync(),
    };
  } else {
    return {
      [haptic]: () =>
        Haptics.notificationAsync(haptic as Haptics.NotificationFeedbackType),
    };
  }
};

const haptics: Record<HapticFeedbackType, () => void> = Object.assign(
  {},
  ...Object.values(HapticFeedback).map(hapticToTrigger),
);

export default haptics;

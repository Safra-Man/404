export type GenderValue = 'female' | 'male' | 'other';

export const GENDER_OPTIONS: { readonly value: GenderValue; readonly label: string }[] = [
  { value: 'female', label: 'Feminino' },
  { value: 'male', label: 'Masculino' },
  { value: 'other', label: 'Prefiro não informar' },
];

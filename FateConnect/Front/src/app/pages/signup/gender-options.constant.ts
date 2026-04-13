export type GenderValue = 'female' | 'male' | 'prefer_not_to_say';

export const GENDER_OPTIONS: { readonly value: GenderValue; readonly label: string }[] = [
  { value: 'female', label: 'Feminino' },
  { value: 'male', label: 'Masculino' },
  { value: 'prefer_not_to_say', label: 'Prefiro não informar' },
];

export type FormProp = {
  onToggle: () => void;
  onSubmit: () => void;
  toggle: boolean;
};

export interface FormInput {
  firstName: string;
  surName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  year: string;
  month: string;
  day: string;
  comments: string;
}

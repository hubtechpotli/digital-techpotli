declare module 'react-hook-form' {
  // Minimal shim for react-hook-form to satisfy TypeScript in this project build.
  export function useForm<T = any>(options?: any): any;
  export const Controller: any;
  export const useController: any;
  export function useFormContext(): any;
  export function useFormState(opts?: any): any;
  export const FormProvider: any;

  // Common types used across the codebase
  export type FieldValues = Record<string, any>;
  export type FieldPath<TFieldValues = FieldValues> = string & keyof TFieldValues;
  export type ControllerProps<TFieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = any;

  export default any;
}

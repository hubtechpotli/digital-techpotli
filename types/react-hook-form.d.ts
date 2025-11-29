declare module 'react-hook-form' {
  // Minimal shim for react-hook-form to satisfy TypeScript in this project build.
  export function useForm<T = any>(options?: any): any;
  export const Controller: any;
  export const useController: any;
  export const useFormContext: any;
  export const FormProvider: any;
  export default any;
}

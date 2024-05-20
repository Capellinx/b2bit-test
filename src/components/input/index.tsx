import { forwardRef, InputHTMLAttributes } from "react";
import { ZodError } from "zod";


interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label: string;
   error?: ZodError | null;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
   ({ label, error, ...rest }, ref) => {
      return (
         <>
            <label
               htmlFor="">{label}</label>
            <input
               ref={ref}
               {...rest} />
            {error ? "Message: This input need to check" : null}
         </>
      )
   }
);
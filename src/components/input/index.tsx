import { forwardRef, InputHTMLAttributes } from "react";
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label: string;
   error?: any;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
   ({ label, error, ...rest }, ref) => {
      return (
         <>
            <label
               className="font-bold">{label}</label>
            <input
               ref={ref}
               {...rest} />
            {error ? <p className="text-[#FF0000] font-bold mt-2">{error.message}</p> : null}
         </>
      )
   }
);
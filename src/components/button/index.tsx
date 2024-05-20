import { ButtonHTMLAttributes, forwardRef } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   text: string
   newClass?: string
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ text, newClass, ...rest }, ref) => {
   return (
      <>
         <button
            {...rest}
            ref={ref}
            className={`w-full bg-blue_b2bit text-lg font-bold font-nunito text-white p-2 rounded-lg ${newClass}`}>
            {text}
         </button>
      </>
   )
}) 
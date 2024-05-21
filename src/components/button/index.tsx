import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: ReactNode
   newClass?: string
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ children, newClass, ...rest }, ref) => {
   return (
      <>
         <button
            {...rest}
            ref={ref}
            className={`w-full bg-blue_b2bit text-lg font-bold font-nunito text-white p-2 rounded-lg cursor-pointer ${newClass}`}
            >
               {children}
         </button>
      </>
   )
}) 
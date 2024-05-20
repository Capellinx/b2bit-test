
interface IButtonProps {
   text: string
}

export const Button = ({ text }: IButtonProps) => {
   return (
      <>
         <button className="w-full bg-blue_b2bit text-lg font-bold font-nunito text-white p-2 rounded-lg">
            {text}
         </button>
      </>
   )
}
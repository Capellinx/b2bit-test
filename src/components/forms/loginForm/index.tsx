
import { Input } from './../../input/index';
import { Button } from './../../button/index';

export const LoginForm = () => {
   return (
      <form className='flex flex-col mt-9'>
         <Input
            label='E-mail' 
            placeholder='@example.com'
            className='w-[365px] bg-white_input p-4 mt-5 mb-5 rounded-lg'
         />
         <Input
            label='Password' 
            placeholder='****************'
            className='w-[365px] bg-white_input p-4 mt-5 mb-5 rounded-lg'
         />
         <Button text='Sig In'/>
      </form>
   )
}
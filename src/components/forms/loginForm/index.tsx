
import { Input } from './../../input/index';
import { Button } from './../../button/index';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IUserInformation } from '../../../interfaces/user';
import { loginSchema } from '../../../schemas/loginSchema';
import { useLogin } from '../../../hooks/useLoginContext';

export const LoginForm = () => {
   const { loginUser } = useLogin()

   const { handleSubmit, register, formState: { errors } } = useForm<IUserInformation>({
      resolver: zodResolver(loginSchema)
   })


   return (
      <form className='flex flex-col mt-9' onSubmit={handleSubmit(loginUser)}>
         <Input
            label='E-mail'
            type='email'
            placeholder='@example.com'
            className='w-[365px] bg-white_input p-4 mt-5  rounded-lg'
            {...register('email')}
            error={errors.email}
         />
         <Input
            label='Password'
            type='password'
            placeholder='****************'
            className='w-[365px] bg-white_input p-4 mt-5  rounded-lg'
            {...register('password')}
            error={errors.password}
         />
         <Button type='submit' newClass='mt-8'>Sign in</Button>
      </form>
   )
}
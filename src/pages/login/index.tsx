
import { LoginForm } from './../../components/forms/loginForm/index';

export const Login = () => {
   return (
      <main className='bg-white_light h-screen flex items-center justify-center flex-col rounded-lg'>
         <section className='bg-white w-md p-8 flex flex-col items-center rounded-lg shadow-[0px_0px_40px_20px_#00000024]'>
            <img
               src="/logo.png"
               alt="logo da b2bit"
            />
            <LoginForm />
         </section>
      </main>
   )
}

import { useLogin } from '../../hooks/useLoginContext';
import { Button } from './../button/index';

export const Header = () => {
   const { logoutUser } = useLogin()
   return (
      <header className='bg-white flex justify-end'>
         <div className='w-72 p-3'>
            <Button  onClick={() => logoutUser()}>Logout</Button>
         </div>
      </header>
   )
}
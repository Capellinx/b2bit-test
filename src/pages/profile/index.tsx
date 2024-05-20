import { Header } from './../../components/header/index';
import { Input } from './../../components/input/index';
import { ProfileList } from './../../components/profileList/index';

export const Profile = () => {
   return (
      <>
         <Header />
         <main className='bg-white_auth h-screen flex items-center justify-center'>
            <section className='bg-white w-md p-8 flex flex-col items-center rounded-2xl shadow-[0px_0px_40px_20px_#00002014]'>
               <p>Profile picture</p>
               <ProfileList />
            </section>
         </main>
      </>
   )
}
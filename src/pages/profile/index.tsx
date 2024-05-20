import { Header } from './../../components/header/index';
import { ProfileList } from './../../components/profileList/index';

export const Profile = () => {
   return (
      <>
         <Header />
         <main className='bg-white_auth h-screen flex items-center justify-center'>
            <section className='bg-white w-md p-8 flex flex-col items-center rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
               <p>Profile picture</p>
               <ProfileList />
            </section>
         </main>
      </>
   )
}
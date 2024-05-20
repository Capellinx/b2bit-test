import { Header } from './../../components/header/index';
import { Input } from './../../components/input/index';

export const Profile = () => {
   return (
      <>
         <Header />
         <main className='bg-white_auth h-screen flex items-center justify-center'>
            <section className='bg-white w-md p-8 flex flex-col items-center rounded-2xl shadow-[0px_0px_40px_20px_#00002014]'>
               <div>
                  <p>Profile picture</p>
               </div>
               <div className='flex flex-col mt-8'>
                  <Input
                     label='Your name'
                     placeholder='Lucas Capella'
                     disabled
                     className='w-[365px] bg-white_info p-4 mt-5 mb-6 rounded-lg'
                  />
                  <Input
                     label='Your e-mail'
                     placeholder='Lucas Capella'
                     disabled
                     className='w-[365px] bg-white_info p-4 mt-5 rounded-lg'
                  />
               </div>
            </section>
         </main>
      </>
   )
}
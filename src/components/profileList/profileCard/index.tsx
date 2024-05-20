import { IProfile } from "../../../interfaces/user"
import { Input } from './../../input/index';

interface IProfileCardProps {
   profile: IProfile
} 

export const ProfileCard = ({ profile }: IProfileCardProps) => {
   return (
      <li className='flex flex-col'>
         <img src={profile.avatar.low} alt="" className="rounded-3xl mb-6  "/>
         <Input
            label='Your name'
            placeholder={profile.email}
            disabled
            className='w-[365px] bg-white_info p-4 mt-5 mb-6 rounded-lg'
         />
         <Input
            label='Your e-mail'
            placeholder={profile.name}
            disabled
            className='w-[365px] bg-white_info p-4 mt-5 rounded-lg'
         />
      </li>
   )
}
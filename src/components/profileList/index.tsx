import { useLogin } from "../../hooks/useLoginContext"
import { ProfileCard } from "./profileCard"


export const ProfileList = () => {
   const { profile } = useLogin()
   return (
      <ul className='flex flex-col mt-8'> 
         {profile && profile?.map(profile => (
            <ProfileCard
               key={profile.name}
               profile={profile} />
         ))}
      </ul>
   )
}
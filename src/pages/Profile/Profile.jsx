import { NavPage } from '../../components/NavPage/NavPage'
import { Marquee } from '../../components/Marquee/Marquee'

const Profile = () => {

  return (
    <div className=' h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-black to-slate-800'>
      <NavPage/>
      <div className='grid place-content-center h-screen gap-8 overflow-hidden'>
        <div className='rotate-45 shadow'>
          <Marquee />
        </div>
        <div className='rotate-[205deg]'>
          <Marquee />
        </div>
        <div className='rotate-[20deg] translate-y-32'>
          <Marquee />
        </div>
        <div className='rotate-[270deg]'>
          <Marquee />
        </div>
        <div className='rotate-[340deg]'>
          <Marquee />
        </div>
        <div className='rotate-[340deg] -translate-y-[30rem]'>
          <Marquee />
        </div>
      </div>
    </div>
  )
}

export default Profile

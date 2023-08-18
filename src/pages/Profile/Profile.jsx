import {Outlet} from 'react-router-dom'
import { NavPage } from '../../components/NavPage/NavPage'

const Profile = () => {
  return (
    <div>
      Profile
      <Outlet/>
      <NavPage/>
    </div>
  )
}

export default Profile

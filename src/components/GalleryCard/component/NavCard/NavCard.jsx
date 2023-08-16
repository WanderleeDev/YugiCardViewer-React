import { useState } from "react";
import { Link } from 'react-router-dom'
//  icons
import { RxHeart, RxHeartFilled, RxDownload, RxEyeOpen, RxAccessibility  } from "react-icons/rx";

const NavCard = ({ data }) => {
  const [isCheck, setIsCheck] = useState(false)
  const { img, name } = data
  const handleFav = () => {
    setIsCheck(!isCheck)
  }
  
  return (
    <>
      <nav className="absolute right-0 translate-x-[100%] text-slate-950 h-full grid justify-center content-between py-4 w-12 text-2xl translate-y-5 duration-300 opacity-0 blur-sm pointer-events-none z-20">
        <ul className="grid gap-6">
          <li onClick={ () => handleFav() } className="bg-slate-300/80 rounded-md w-8 h-8 backdrop-blur-sm grid place-content-center cursor-pointer">
            { isCheck 
            ? <RxHeartFilled className="text-red-400 hover:scale-90 active:scale-110 duration-100"/> 
            : <RxHeart className="hover:scale-90 active:scale-110 duration-100"/> 
            }
          </li>
          <li className="bg-slate-300/80 rounded-md w-8 h-8 backdrop-blur-sm grid place-content-center cursor-pointer">
            <a href={img} download={`carta-${name}.jpg`}>
            <RxDownload className="hover:scale-90 active:scale-110 duration-100"/>
            </a>
          </li>
          <li className="bg-slate-300/80 rounded-md w-8 h-8 backdrop-blur-sm grid place-content-center cursor-pointer">
            <Link to='/dashBoard/:id'>
              <RxEyeOpen className="hover:scale-90 active:scale-110 duration-100"/>
            </Link>
          </li>
        </ul>
        <button className="bg-slate-300/80 rounded-md w-8 h-8 backdrop-blur-sm grid place-content-center cursor-pointer">
          <RxAccessibility className="hover:scale-90 active:scale-110 duration-100"/>
        </button>
      </nav>
    </>
  )
}

export default NavCard

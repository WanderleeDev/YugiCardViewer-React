import { useState } from "react";
//  icons
import { RxHeart } from "react-icons/rx";
import { RxHeartFilled } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";
import { RxEyeOpen } from "react-icons/rx";
import { RxAccessibility } from "react-icons/rx";


const NavCard = (props) => {
  const [isCheck, setIsCheck] = useState(false)
  console.log(props);
  const { image_url_small, name  } = data
  console.log(name);
  const handleFav = () => {
    setIsCheck(!isCheck)
  }
  
  return (
    <>
      <nav className="absolute right-0 translate-x-[100%] text-slate-950 h-full grid justify-center content-between py-4 w-12 text-2xl translate-y-5 duration-300 opacity-0 blur-sm">
        <ul className="grid gap-6">
          <li onClick={ () => handleFav() } className="bg-slate-300/80 rounded-md w-8 h-8 backdrop-blur-sm grid place-content-center cursor-pointer">
            { isCheck 
            ? <RxHeart className="hover:scale-90 active:scale-110 duration-100"/> 
            : <RxHeartFilled className="hover:scale-90 active:scale-110 duration-100"/> 
            }
          </li>
          <li className="bg-slate-300/80 rounded-md w-8 h-8 backdrop-blur-sm grid place-content-center cursor-pointer">
            <a href={img} download={img}>
            <RxDownload className="hover:scale-90 active:scale-110 duration-100"/>
            </a>
          </li>
          <li className="bg-slate-300/80 rounded-md w-8 h-8 backdrop-blur-sm grid place-content-center cursor-pointer">
            <RxEyeOpen className="hover:scale-90 active:scale-110 duration-100"/>
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

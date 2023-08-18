import { NavLink } from "react-router-dom"
import { RiHome4Fill, RiMailFill, RiSeoFill } from "react-icons/ri";

export const NavPage = () => {
  return (
    <nav className="fixed top-2/4 -translate-y-2/4 grid place-content-center w-12 bg-blue-500/50 py-4 rounded-md z-10">
      <ul className="self-center text-2xl grid gap-4">
        <li className="">
          <NavLink className="link--after hover:after:opacity-100 text-slate-900 rounded-md p-1 block relative hover:after:top-2/4 hover:after:blur-0" to="/" activePath="active" data-info="go to home">
            <RiHome4Fill/>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="link--after hover:after:opacity-100 text-slate-900 rounded-md p-1 block relative hover:after:top-2/4 hover:after:blur-0" activePath="active" to="/contact" data-info="go to contact">
            <RiMailFill/>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="link--after hover:after:opacity-100 text-slate-900 rounded-md p-1 block relative hover:after:top-2/4 hover:after:blur-0" activePath="active" to="/profile" data-info="advanced search">
            <RiSeoFill/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

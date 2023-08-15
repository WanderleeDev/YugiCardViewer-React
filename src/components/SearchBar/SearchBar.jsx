import cardGif from '@images/blueEyes.gif'
import {Link} from 'react-router-dom'

const SearchBar = () => {
  return (
    <>
    <label htmlFor="search" className="flex justify-between items-center py-4">
      <button type="button" className='flex gap-2 items-center text-xl tracking-wide'>
        <Link to={'/contact/5454'}>
          Buscar
        </Link>
        <img className='h-14 -rotate-12' src={cardGif} alt='iconCard'/>
      </button>
      <input className='h-7 border-2 rounded-md text-slate-800' id="search" type="text"/>
    </label>
    </>
  )
}

export default SearchBar

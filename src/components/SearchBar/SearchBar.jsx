const SearchBar = () => {
  return (
    <>
    <label htmlFor="search" className="flex flex-wrap justify-center items-center py-4 sm:justify-end">
      <button type="button" className='flex gap-2 items-center text-xl tracking-wide px-4'>
        <span>Search</span>
        <span className='pt-1'>&gt;</span>
      </button>
      <input className='w-full h-7 pl-2 placeholder:text-slate-500 border-2 rounded-md text-slate-800 sm:w-min' id="search" type="text" placeholder='Search by name'/>
    </label>
    </>
  )
}

export default SearchBar

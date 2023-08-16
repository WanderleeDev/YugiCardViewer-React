import { ItemFav } from "../ItemFav/ItemFav"

export const ListFav = () => {
  return (
  <div className= "max-w-2xl mx-auto fixed right-0 top-3.5 max-h-80 overflow-y-scroll scrollStyle rounded-sm z-10">
    <section className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <header className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">My Favorites</h3>
      </header>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          <ItemFav />  
          <ItemFav />  
          <ItemFav />  
        </ul>
      </div>
    </section>
  </div>
  )
}

import { RxHeart, RxHeartFilled } from "react-icons/rx";


export const ItemFav = () => {
  const isCheck =  false
  return (
    <li className="py-3 rounded-sm px-4 sm:py-4 hover:bg-slate-600">
      <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
              <img className="w-10" src="https://images.ygoprodeck.com/images/cards_small/2411269.jpg" alt="Neil image"/>
          </div>
          <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Nombre la de carta
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Typo de la carta
              </p>
          </div>
          <button className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            { 
            isCheck 
              ? <RxHeartFilled className="text-red-400 hover:scale-90 active:scale-110 duration-100"/> 
              : <RxHeart className="hover:scale-90 active:scale-110 duration-100"/> 
            }
          </button>
      </div>
    </li>
  )
}

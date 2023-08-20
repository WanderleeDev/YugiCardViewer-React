import { useState } from "react"
import { ListFav } from "./component/ListFav/ListFav"

export const FavoriteVault = () => {
  // provisional
  const [isVisible, setIsVisible] = useState(false)

  const onAppearFav = () => {
    setIsVisible(!isVisible)
  };

  return (
    <>
      {isVisible && <ListFav />} 
    </>
  )
}

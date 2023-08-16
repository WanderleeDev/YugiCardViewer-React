import { useState } from "react"
import { ListFav } from "./component/ListFav/ListFav"
import { BtnFav } from "./component/BtnFav/BtnFav"


export const FavoriteVault = () => {
  // provisional
  const [isVisible, setIsVisible] = useState(false)

  const onAppearFav = () => {
    setIsVisible(!isVisible)
  };

  return (
    <>
      { isVisible && <ListFav /> }
      <BtnFav onAppearFav={ onAppearFav } />
    </>
  )
}

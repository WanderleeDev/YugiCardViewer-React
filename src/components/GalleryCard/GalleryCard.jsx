import useFetch from "../../hooks/useFecth"
import { useState } from "react";
import Card from "./component/Card/Card";
import SearchBar from "../SearchBar/SearchBar"
import { FavoriteVault } from "../FavoriteVault/FavoriteVault";
import { BtnFav } from "../FavoriteVault/component/BtnFav/BtnFav";

const GalleryCard = () => {
  const { data } = useFetch()
  const [show, setShow] = useState(true)
  const [fav, setFav] = useState([''])
  const appearBox = () => setShow(!show)
  const addFav = (newFav) => setFav(f => [...f, newFav])

  return (
    <>
      <section className="px-4 max-w-6xl mx-auto grid">
        <header>
          <h2></h2>
        </header>
        <SearchBar />
        {fav.length && <FavoriteVault />}
        {fav.length && <BtnFav appearBox={appearBox}/>}
        <div className="grid grid-cols-colResponsive place-items-center gap-y-12">
          {
            data.map((item) => <Card key={item.id} info={item} />)
          }
        </div>
      </section>
    </>
  )
}

export default GalleryCard

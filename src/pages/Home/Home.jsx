import { FavoriteVault } from "../../components/FavoriteVault/FavoriteVault"
import GalleryCard from "../../components/GalleryCard/GalleryCard"
import useData from "../../hooks/useFecth"

const Home = () => {
  const d =  useData()
  return(
    <>
    <FavoriteVault />
    <GalleryCard cardData={d.data?.data}/>
    
    </>
  )
}

export default Home

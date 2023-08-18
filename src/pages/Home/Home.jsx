import { FavoriteVault } from "../../components/FavoriteVault/FavoriteVault"
import Banner from "../../components/Banner/Banner"
import GalleryCard from "../../components/GalleryCard/GalleryCard"
import useData from "../../hooks/useFecth"

const Home = () => {
  const d =  useData()
  return(
    <>
    <Banner/>
    <FavoriteVault />
    <GalleryCard cardData={d.data?.data}/>
    
    </>
  )
}

export default Home

import { FavoriteVault } from "../../components/FavoriteVault/FavoriteVault"
import Banner from "../../components/Banner/Banner"
import GalleryCard from "../../components/GalleryCard/GalleryCard"
import { NavPage } from "../../components/NavPage/NavPage"

const Home = () => {
  return(
    <>
    <Banner/>
    <NavPage/>
    <FavoriteVault />
    <GalleryCard />
    </>
  )
}

export default Home

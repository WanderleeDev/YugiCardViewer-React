import GalleryCard from "../../components/GalleryCard/GalleryCard"
import useData from "../../hooks/useFecth"

const Home = () => {
  const d =  useData()
  return(
    <>
    <GalleryCard cardData={d.data?.data}/>
    </>
  )
}

export default Home

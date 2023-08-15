import SearchBar from "../SearchBar/SearchBar"
import useFetch from "../../hooks/useFecth"
import Card from "./component/Card/Card";

const GalleryCard = () => {
  const { data } = useFetch()

  return (
    <>
      <section className="px-4 max-w-6xl mx-auto grid">
        <header>
          <h2></h2>
        </header>
        <SearchBar/>
        <div className="grid grid-cols-colResponsive place-items-center gap-y-12">
          {
            data.map((item) => (
              <Card key={item.id} info={item}/>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default GalleryCard

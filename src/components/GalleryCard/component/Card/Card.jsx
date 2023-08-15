import NavCard from "../NavCard/NavCard"

const Card = ( data ) => {
  const { name, card_images, atk, def } = data.info
  const { image_url_small } = card_images[0]

  return (
    <>
      <figure className="bg-slate-900 w-56 p-4 rounded-md grid relative showNav">
        <img className="cursor-pointer aspect-[2/3] justify-self-center" src={image_url_small} alt={name} />
        <figcaption className="text-center py-2 font-medium tracking-wide ">{name}</figcaption>
        <div className="flex justify-between">
        <span className="bg-slate-600 py-1 px-2 rounded">ATK: {atk}</span>
        <span className="bg-slate-600 py-1 px-2 rounded">DEF: {def || '???'}</span>
        </div>
        <NavCard data={{img: image_url_small,name: name}}/>
      </figure>
    </>
  )
}

export default Card

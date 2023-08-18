export const BtnFav = ({ onAppearFav }) => {
  const appearFav = () => onAppearFav()
  return (
    <button onClick={appearFav} className="w-20 rotate-12 right-8 fixed bottom-8 z-20" title="Show favorites" aria-label="Show favorites">
      <img src="/public/blueEyes.gif" alt="blue Ice Card" />
    </button>
  )
}

export const Marquee = () => {
  const text = new Array(4).fill(['coming', 'soon!'])
  return (
    <div className={`flex justify-between bg-yellow-500 overflow-hidden relative py-2 w-[100%]`}>
    {
      text.map((t,i)=>{
        return (
          <p key={i} className='will-change-transform flex items-center text-4xl font-semibold uppercase whitespace-nowrap px-12 animate-marquee tracking-wide'>⚠️ 
          <span className='text-6xl px-2'>{t[0]} 
          <span className='text-slate-900 px-2'>{t[1]}</span>
          </span> ⚠️
          </p>
        )
      })
    }
    </div>
  )
}

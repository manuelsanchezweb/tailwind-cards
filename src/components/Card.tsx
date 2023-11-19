type CardProps = {
  name: string
  date: string
  logo: string
  price: string
  link: string
}

export default function Card({ name, date, logo, price, link }: CardProps) {
  const imagePath = `http://localhost:5173/src/assets/${logo}` // add your own path here, this is only test purposes
  return (
    <a
      href={link}
      className="p-4 bg-purple-600 rounded-sm flex items-center gap-4 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 ease-in-out group overflow-hidden w-full md:w-[420px]"
    >
      <figure className="w-32 h-32 flex justify-center items-center rounded-2xl group-hover:rounded-full border-4 border-orange-400 bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-150 group-hover:translate-x-[230%]">
        <img className="mx-auto" src={imagePath} alt={name} />
      </figure>

      <div className="text-white text-left group-hover:text-purple-600 group-hover:translate-x-[-72%] transition-all duration-300 ease-in-out">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-lg font-semibold group-hover:hidden">
          {date} / {price}
        </p>
      </div>
    </a>
  )
}

import Card from './Card'

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <Card
        name="JavaScript Avanzado"
        date="18.11.2023"
        logo="./javascript.png"
        price="10.50"
        link="https//www.google.es"
      />
      <Card
        name="Typescript Avanzado"
        date="18.11.2023"
        logo="./typescript.png"
        price="10.50"
        link="https//www.google.es"
      />
      <Card
        name="React Basics"
        date="18.11.2023"
        logo="./react.png"
        price="10.50"
        link="https//www.google.es"
      />
      <Card
        name="Qwik for Everybody"
        date="18.11.2023"
        logo="./qwik.png"
        price="10.50"
        link="https//www.google.es"
      />
      <Card
        name="CSS for Everybody"
        date="18.11.2023"
        logo="./css.png"
        price="10.50"
        link="https//www.google.es"
      />
    </div>
  )
}

export default CardList

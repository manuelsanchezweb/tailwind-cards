import CardList from './components/CardList'

function App() {
  return (
    <main className="text-center flex flex-col gap-12 items-center w-full h-full py-12">
      <h1 className="text-4xl font-black">Cool cards with Tailwind CSS</h1>
      <p>
        Idea from{' '}
        <a
          target="_blank"
          rel="nofollow noopener"
          href="https://www.youtube.com/watch?v=xc8qdTXX4EE"
        >
          Codea App
        </a>
      </p>
      <CardList />
    </main>
  )
}

export default App

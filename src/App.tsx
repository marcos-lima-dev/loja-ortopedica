// src/App.tsx
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <main className="min-h-screen bg-white pt-10">
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-800">Seção de produtos abaixo...</h2>
        </div>
      </main>
    </>
  )
}

export default App
// src/App.tsx
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-800">
            Header pronto! 🎉
          </h1>
          <p className="mt-4 text-gray-600">Role para baixo e veja o header fixo!</p>
        </div>
      </main>
    </>
  )
}

export default App
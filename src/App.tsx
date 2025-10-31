// src/App.tsx
import Header from './components/Header'
import Banner from './components/Banner'
import FamiliesSection from './components/FamiliesSection'
import Divider from './components/Divider'

function App() {
  return (
    <div className="relative bg-white">
      <Header />
      <Banner />
      <FamiliesSection />
      <Divider /> {/* DIVISOR AQUI */}
      {/* Próximas seções */}
    </div>
  )
}

export default App
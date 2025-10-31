// src/App.tsx
import Header from './components/Header'
import Banner from './components/Banner'
import FamiliesSection from './components/FamiliesSection'
import Divider from './components/Divider'
import ProductsSection from './components/ProductsSection'

function App() {
  return (
    <div className="relative bg-white">
      <Header />
      <Banner />
      <FamiliesSection />
      <Divider className="mt-8" /> {/* ESPAÇAMENTO PEQUENO AQUI */}
      <ProductsSection />
    </div>
  )
}

export default App
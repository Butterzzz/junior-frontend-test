import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import ProductList from './components/ProductList/ProductList.jsx'
import { useProductList } from './components/ProductList/useProductList'

function App() {
  const { items, filter, updateFilter, resetFilter } = useProductList()
  return (
    <div>
      <Header />
      <Filters filter={filter} updateFilter={updateFilter} resetFilter={resetFilter} />
      <ProductList items={items} />
    </div>
  )
}

export default App

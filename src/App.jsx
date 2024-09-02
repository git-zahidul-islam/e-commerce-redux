import AddProducts from "./features/products/AddProducts";
import ProductsListView from "./features/products/ProductsListView";

function App() {
  return (
    <div>
      <h1>This Is The Main Page</h1>
      <div style={{margin: '10px 0'}}>
          <AddProducts/>
      </div>
      <ProductsListView/>
    </div>
  )
}

export default App;
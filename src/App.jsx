import { useState } from "react";
import AddProducts from "./features/products/AddProducts";
import ProductsListView from "./features/products/ProductsListView";

function App() {
  const [isEdit,setIsEdit] = useState(false)
  const [productToEdit,setProductToEdit] = useState({})


  const handlePassData = (product) => {
    setProductToEdit(product)
    setIsEdit(true)
  }


  return (
    <div>
      <h1>This Is The Main Page</h1>
      <div style={{margin: '10px 0'}}>
          <AddProducts productToEdit={productToEdit} isEdit={isEdit}/>
      </div>
      <ProductsListView onHandleDataPass={handlePassData}/>
    </div>
  )
}

export default App;
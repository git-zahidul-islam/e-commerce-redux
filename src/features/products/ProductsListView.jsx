import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFetch } from "./productSlice";

const ProductsListView = () => {
    const {products,isLoading,error} = useSelector((state) => state.productsR)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(productFetch())
    },[dispatch])

    return (
        <div>
           {isLoading && <p>the data is loading</p>}
           {error && <p>{error}</p>}
           {!isLoading && !error && products.length > 0 && products.map((product) =>{
            return(
                <article style={{border: '2px solid green', padding: '0 10px', margin: '10px 0'}} key={product.id}>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </article>
            )
           }) }
        </div>
    );
};

export default ProductsListView;
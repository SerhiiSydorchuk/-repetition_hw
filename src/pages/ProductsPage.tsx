import React, {useEffect, useState} from 'react';
import { loadAuthProducts, refresh} from "../services/api.service";
import {IProduct} from "../Model/IProduct";

const ProductsPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    useEffect(() => {
 loadAuthProducts()
     .then(value => {
     if(value){
         setProducts(value);
     }
 })
     .catch(reason => {
         refresh().then()
     }
     )
    }, []);
    return (
        <div>
            {products.map(product => <div>{product.brand} {product.id}</div>)}
        </div>
    );
};

export default ProductsPage;
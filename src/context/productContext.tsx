import React, { createContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface ProductState {
    products: object; 
}

interface ProductContextData {
    productData: object;
    getProduct(): void;
}


export const ProductContextTo = createContext<ProductContextData>({} as ProductContextData);

export const ProductContext: React.FC = ({ children }) => {
    const [productData, setProductData] = useState<ProductState>(() => {
        
        return {} as ProductState; 
    }); 
    
    const getProduct = useCallback(async () => {
        const response = await api.get('/products');

        setProductData(response.data); 
    }, []); 

    

    return (
        <ProductContextTo.Provider value={{ productData, getProduct }}>
            {children}
        </ProductContextTo.Provider>
    )
}

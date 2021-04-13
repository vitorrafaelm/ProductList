import React, { useCallback, useState, useContext, useEffect } from 'react';
import api from '../../../services/api';
import { Card, Button } from 'antd';

import './style.css';

const { Meta } = Card;

const List = () => {
    const [product, setProduct] = useState([]);

    const getProduct = useCallback(async () => {
        const response = await api.get('/products');

        setProduct(response.data);
    }, []);

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="containerCard">
            {product.map((product: any) => {
                return (
                    <Card
                        key={product.id}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={product.image} />}
                        className="marginCard"
                    >
                        <div className="divChartPrice">
                            <span>Price: {product.price}</span>
                        </div>

                        <div className="divChartPrice">
                            <span>Description: {product.description}</span>
                        </div>
                      

                        <Button className="buttonChart" type="primary" size={'small'}>
                            Add to chart
                        </Button>
                    </Card>
                );
            })}
        </div>
    )
}

export default List;

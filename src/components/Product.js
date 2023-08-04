import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
    const dispatch = useDispatch();
    const { data: products } = useSelector(state => state.products)
    // const [ products, getProducts ] = useState([])

    useEffect(() => {
        dispatch(getProducts());
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => getProducts(result))
    }, [])


    const addToCart = (product) => {
        //dispatch an add action
        dispatch(add(product))

    }

    const cards = products.map(product =>

        <Card style={{ width: '300px', height: 'h-100' }}>
            <Card.Img variant="top" src={product.image} style={{ height: '130px', width: '100px', margin: '0 auto' }} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => addToCart(product)} variant="primary">Add to cart</Button>
            </Card.Footer>
        </Card>
    )

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
                {cards}

            </div>
        </>
    );
}

export default Product;
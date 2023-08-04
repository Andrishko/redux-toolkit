import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { remove } from '../store/CartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart)

    const removeFromCart = (id) => {
        dispatch(remove(id))
    }

    const carts = cartItems.map(cartItem =>

        <Card style={{ width: '300px', height: 'h-100' }}>
            <Card.Img variant="top" src={cartItem.image} style={{ height: '130px', width: '100px', margin: '0 auto' }} />
            <Card.Body>
                <Card.Title>{cartItem.title}</Card.Title>
                <Card.Text>
                    {cartItem.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button onClick={() => removeFromCart(cartItem.id)} variant="primary">Delete from cart</Button>
            </Card.Footer>
        </Card>
    )

    return (
        <>
            <p>Cart</p>
            {carts}
        </>
    );
}

export default Cart;
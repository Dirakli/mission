import PropTypes from 'prop-types'
import { useContext, useState } from 'react';
import { CartContext } from '../../provider/CartProvider';
import { Button, Alert } from '../../atoms';
import './ProductItem.css';

export const ProductsItem = ({ product }) => {
  const {
    addNewItem,
    removeItem,
    cart: { items: cartItems },
  } = useContext(CartContext);

  const [outOfStock, setOutOfStock] = useState(false);


  const handleAddToCart = () => {
    if(product.stock) {
        addNewItem(product);
    }else {
        setOutOfStock(true);
    }
  };

  if(!product) {
    return null;
  }

  const isInCart = product.id in cartItems;

  return (
    <div className="card mb-1 productItem--card">
      <h4 className="card-header">
        {product.name}, ფასი - ${product.price}
      </h4>
      <div className="card-body">
        <div className='d-flex flex-column' >
        { outOfStock && <Alert message="მეტის დამატება შეუძლებელია" /> }
        <h6>
          {product.stock ? 'მარაგშია' : 'არ არის მარაგში'}, კატეგორია -{' '}
          {product.category}
        </h6>
        </div>
        <h6 className="text-muted">
          {isInCart
            ? `კალათაში : ${cartItems[product.id].qty}ც`
            : `არ არის კალათაში🛒`}
        </h6>
        <div className="btn-group">
          <Button
            className="btn btn-outline-success"
            onClick={handleAddToCart} disabled={outOfStock}
          >
            Add to card🛒
          </Button>
          <Button
            className="btn btn-outline-danger"
            onClick={() => removeItem(product)}
            disabled={!isInCart}
          >
            Remove from card📍
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.object.isRequired
}
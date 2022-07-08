import { useCart } from '../../provider/CartProvider';
import { ProductTableRow } from './ProductTableRow';


export const ProductTable = (props) => {
  const { addNewItem, removeItem, cart } = useCart();

  const renderProducts = () => {

    const cartItems = Object.entries(cart.items);

    if(cartItems.length === 0 ) {
      return (
        <tr>
          <td colSpan="5" >
            <h3 className='text-center' >Cart is Empty</h3>
          </td>
        </tr>
      )
    }

    return (
      cartItems.map(([productId, item]) => {
        const currentItem = {
          ...item,
          id: productId,
        }
        return (
          <ProductTableRow
            key={`product-${productId}`}
            {...item}
            id={+productId}
            onCartAdd={() => addNewItem(currentItem)}
            onCartRemove={() => removeItem(currentItem)}
          />
        );
      })
    )
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">დასახელება</th>
          <th scope="col">ფასი</th>
          <th scope="col">რაოდენობა/სულ</th>
          <th scope="col">მოქმედება</th>
        </tr>
      </thead>
      <tbody>
        {renderProducts()}
      </tbody>
    </table>
  );
};

import { useEffect, useState } from 'react';
import { ProductTable } from '../../components/table';

export const ShoppingCart = (props) => {
  const [value, setValue] = useState();

  // useEffect(() => {
  //     console.log("shopping cart")
  // })
  useEffect(() => {
    console.log('AJAX request, started');
    const timerId = setTimeout(() => {
      console.log('AJAX Request, finished');
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  // useEffect(() => {
  //     console.log("shopping cart")
  // }, [value]);

  return (
    <div className="row">
      <h2 onClick={() => setValue(Math.random())}>Shopping Cart ✔🧨</h2>
      <div className="col-12">
        <ProductTable />
      </div>
    </div>
  );
};

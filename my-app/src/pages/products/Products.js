import { useState } from 'react';

import debounce from 'lodash/debounce';
import { ProductsItem } from './ProductItem';
import { Button, TextInput, Form } from '../../atoms';
import productsData from '../../components/products.json';
import { Collapsible } from '../../components/collapsible';


export const Products = () => {
    const [inStockOnly, setInStockOnly] = useState(false);
    const [filterTerm, setFilterTerm] = useState('');

    const renderProducts = () => {
        let data = productsData.slice();
        if(inStockOnly) {
            data = data.filter((item) => item.stock);
        }

        if(filterTerm) {
            console.log('TYPING')
            data = data.filter((el) => el.name.includes(filterTerm));
        }
         return data.map((item, index) => {
            return <ProductsItem product={item} key={index} />
        }); 
    };

    const handleFilterChange = ({ target }) => {
        setFilterTerm(target.value)};

    return (
        <div className="row-shadow my-3 p-3" >
            <h3>Products</h3>
            <Form>
                <div className='mb-3 row' >
                    <div className='col-8' >
                        <TextInput value={filterTerm} onChange={handleFilterChange} placeholder='ძიება...' />
                    </div>
                    <div className='col-4' >
                    <Button
                        className="btn btn-outline-primary" 
                        type="Button"
                        onClick={() => setInStockOnly(!inStockOnly)}
                        > 
                        {(inStockOnly ? "✔მაჩვენე სრული პროდუქცია" : "🧨მაჩვენე მარაგში არსებული რაოდენობა")} 
                        </Button>
                    </div>
                </div>
            </Form>
            <hr />
            <Collapsible closedTitle="მაჩვენე პროდუქცია" openedTitle="დამალე პროდუქცია" >
            <div className='d-flex flex-wrap justify-content-between' >{renderProducts()}</div>
            </Collapsible>
        </div>
    )
}


import { useEffect, useState } from 'react';

import debounce from 'lodash/debounce';
import { ProductsItem } from './ProductItem';
import { Button, TextInput, Form } from '../../atoms';
import productsData from '../../components/products.json';
import { Collapsible } from '../../components/collapsible';
import { useLocalStorage, useDebounce } from '../../hooks';
import { filter } from 'lodash';


export const Products = () => {
    const [inStockOnly, setInStockOnly] = useState(false);
    const [result, setResult] = useState(productsData.slice());
    const [filterTerm, setFilterTerm] = useLocalStorage('super--app: shopping-cart','');
    const pausedSearch = useDebounce(filterTerm, 4000)

    useEffect(() => {
        if (pausedSearch) {
            const data = productsData.filter((el) => el.name.toLowerCase().includes(pausedSearch.toLowerCase()));
            setResult(data)
        } else {
            setResult(productsData.slice());
        }
    }, [pausedSearch, productsData]);

    const renderProducts = () => {
        let data = result.slice();
        if(inStockOnly) {
            data = result.filter((item) => item.stock);
        }
         return result.map((item, index) => {
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


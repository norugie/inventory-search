import { useState } from 'react';
import { PRODUCTS } from '../assets/data';
import Product from './product';
import Modal from './modal';

function Table ({search}) {
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Product Name</th>
                        <th scope='col'>Product Description</th>
                        <th scope='col'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PRODUCTS.filter((product) => {
                            if (search.toLowerCase() === '') return product;
                            else return product.name.toLowerCase().includes(search)
                            || product.description.toLowerCase().includes(search)
                            || product.price.toString().includes(search);
                        }).map((product) => (
                            <Product key={product.id} product={product} setOpen={setOpen} setSelectedProduct={setSelectedProduct} />
                        ))
                    }
                </tbody>
            </table>
            {open && <Modal selectedProduct={selectedProduct} />}
        </>
    );
}

export default Table;
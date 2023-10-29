function Product ({product, setOpen, setSelectedProduct}) {
    function onOpenProductModal (product) {
        setOpen(true);
        setSelectedProduct(product);
    }

    return (
        <tr>
            <td data-label='Product Name'><a href='/#' role='button' onClick={() => onOpenProductModal(product)}>{product.name}</a></td>
            <td data-label='Product Description'>{product.description}</td>
            <td data-label='Price'>$ {product.price}</td>
        </tr>
    );
}

export default Product;
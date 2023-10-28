function Modal ({selectedProduct, open, setOpen}) {
    return (
        <div className={`modal ${open ? 'open' : ''}`}>
            <div className='modal-content'>
                <div className="product">
                    <div className="content">
                        <h2>{selectedProduct.name}</h2>
                        <h2>$ {selectedProduct.price}</h2>
                        <h4>Product Description</h4>
                        <p>{selectedProduct.description}</p>
                        <br />
                        <p><b>Available: </b>{selectedProduct.quantity}</p>
                    </div>
                    <img src={selectedProduct.image} />
                </div>

                <a href='#' className='modal-close' role='button' onClick={() => setOpen(false)}>&times;</a>
            </div>
        </div>
    );
}

export default Modal;
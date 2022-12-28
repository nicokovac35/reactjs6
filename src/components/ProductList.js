import '../App.css';

//Lista de productos, onClick para agregar al carrito cantidad de productos

function ProductList ({ product, addToCart }) {
    return(
        <div className='flex'>
            {
                product.map((productItem, productIndex) =>{
                    return (
                        <div className='cards' style={{ width: '22%'}}>
                            <div className='product-item'>
                                <img src={ productItem.url} width="100%" alt="Foto Producto"/>
                                <p> {productItem.name} | {productItem.category}</p>
                                <p> ${productItem.price}/-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                > Agregar Carrito</button>

                            </div>
                        </div>    
                    )
                })

            }
           
        </div>
    )
}

export default ProductList;
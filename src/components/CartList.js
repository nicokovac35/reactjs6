import { useEffect, useState } from "react";
import '../App.css';


function CartList ({ cart }){

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    },[cart])

    return(
        <div>
            {
//Ver carrito de compras, agrega product.                
               CART?.map((cartItem, cartindex) =>{
                    return(
                        <div>
                            <img src={cartItem.url} width={80} alt="cartitem"/>
                            <span>{cartItem.name}</span>| 
                            <button
                            // resta de productos en el carrito
                                 onClick={() =>{
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ?{ ...item, quantity: item.quantity >0 ? item.quantity -1 : 0 }: item 
                                    })
                                    setCART(_CART)
                                }}
                            > - </button>
                            <span>{cartItem.quantity}</span> 
                            
                            <button
                            //Suma de productos con total del carrito
                                onClick={() =>{
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ?{ ...item, quantity: item.quantity + 1 }: item
                                    })
                                    setCART(_CART)
                                }}
                                > + </button>
                            <span>${cartItem.price * cartItem.quantity }</span>  
                        </div>
                    )
                })
            }
                <p className="total"> Total <span></span>
                    {
                        CART.map(item => item.price * item.quantity).reduce((total,value) => total + value, 0)
                    }

                </p>
                
                <div className="continue">
                            <button className="btn-continue">Seguir con la Compra</button>
                    </div>
         
        </div>
    )
} 

export default CartList
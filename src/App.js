import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import  CartList  from './components/CartList';
import { useState} from 'react';


function App() {

  const [ product, setProduct] = useState ([
    {
      url: 'https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-plus-lona-caballero-bota-blanco-a01388c-1.jpg',
      name:'producto1',
      category: 'Tipo1',
      price: 2000 
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-seasonal-chuck-70-lona-dama-bota-naranja-a05114c-1.jpg',
      name: 'Producto 002',
      category: 'Tipo2',
      price: 1500 
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-poliester-dama-bota-morado-a01299c-1.jpg',
      name: 'Producto 003',
      category: 'Tipo2',
      price: 3000 
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-outdoor-rave-piel-unisex-bota-multicolor-a01082c-1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 1800
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-dia-de-muertos-chuck-70-lona-unisex-bota-negro-a05667c1-1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 4000
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-lona-unisex-choclo-rojo-a01450c-1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 4500
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-come-tees-chuck-70s-lona-unisex-bota-naranja-a01762c-1_1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 1300
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-seasonal-chuck-70-lona-dama-bota-rosa-a03795c-1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 2100
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-at-cx-cc-lona-caballero-bota-negro-a03274c-1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 1200
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-at-cx-cc-lona-caballero-bota-morado-a03275c-1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 3000
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70s-algodon-caballero-bota-negro-a02407c-1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 6000
    },
    {
      url:'https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-at-cx-cc-lona-caballero-bota-morado-a03275c-1.jpg',
      name: 'Producto 004',
      category: 'Tipo3',
      price: 7000
    },
])



  const [cart, setCart] = useState ([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
   
    setCart([...cart,{...data, quantity: 1}])
  } 

  const handleShow = (value) => {
    setShowCart(value)
  }


  return (
   <div> 
      <Header count={cart.length}
        handleShow={handleShow}> 
      </Header>
      {
        showCart ?

        <CartList cart={cart} > </CartList>:


        <ProductList product={product} addToCart={addToCart}></ProductList>
    
      }
    
     
     
    
  </div>  
     );
}

export default App;

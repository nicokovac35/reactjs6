import '../App.css';
import { BsFillBugFill } from "react-icons/bs";

function Header (props) {
    return (
        <div className="flex shopping-card">
           
            <div className="titulo-logo"  onClick={() => props.handleShow(false)}>
            <h3> Zico <BsFillBugFill /> </h3>
            </div>
            <div className="titulo-producto" onClick={() => props.handleShow(false)}>Productos</div>
            <div className="titulo-carrito" onClick={() => props.handleShow(true)}>Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;

// linea 5,6 botones del carrito 
// props - handleShow :

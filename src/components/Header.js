import '../App.css';

function Header (props) {
    return (
        <div className="flex shopping-card">
            <div onClick={() => props.handleShow(false)}>Sir William Thatcher</div>
            <div onClick={() => props.handleShow(true)}>Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;

// linea 5,6 botones del carrito 
// props - handleShow :

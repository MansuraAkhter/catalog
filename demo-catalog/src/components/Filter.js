import {Link} from 'react-router-dom';
const Filter = () => {
    return ( 
        <nav className="secondrow">
            {/* currentpage */}
            <div className="secondiv" id="mainpage">Main page 
            <div></div>
            </div>
            <div className="secondiv"><Link to="/compare" >Compare Products </Link></div>
            <div className="secondiv"><Link to="/wishlist">Wish List</Link></div>
            <div className="secondiv"><Link to="/products">2 Products - $1000</Link></div>
        </nav>
     );
}
 
export default Filter;
import Cart from "./Cart";
import useFetch from '../useFetch';

const CartWrapper = ({selected, setSelected}) => {
    const {products} = useFetch('http://localhost:8000/products')
    

 
    const remove = (selectedProduct) => {
        setSelected((currentArray) => {
               return currentArray.filter((arrayValue) => {
                    if(arrayValue.id == selectedProduct.id) return false;
                    else return true;
            })
        })
    }
    
    return ( 
        <div>
             {selected && <Cart selected={selected} remove={remove}/>}
        </div>
     );
}
 
export default CartWrapper;
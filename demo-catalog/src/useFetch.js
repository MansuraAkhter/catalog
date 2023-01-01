import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const[products, setProducts] = useState([]);
    const[isPending, setIsPending] = useState(true);
    const[Error, setError] = useState(null);
    
    useEffect(()=> {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
        },[url]) ;

    return ({products, isPending, Error}  );
}
 
export default useFetch;

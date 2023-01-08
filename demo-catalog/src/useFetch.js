import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [products, setProducts] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [Error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        if (!res.ok) {
          console.log('not ok')
          //   throw Error('could not fetch the data for that resource')
        }
        return res.json()
      })
      .then((res) => {
        setProducts(res.data)
        setIsPending(false)
        // setError(null)
      })
      .catch((err) => {
        // setError(err.message)
        setIsPending(false)
      })
  }, [url])

  return { products, isPending, Error }
}

export default useFetch

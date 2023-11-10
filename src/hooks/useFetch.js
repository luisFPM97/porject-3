import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [state, setState] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] =useState(true)

    useEffect(()=> {
        axios.get(url)
            .then(res => {
              setState(res.data)
              setHasError(false)
            })
            .catch(err => {
              console.log(err)
              setHasError(true)
            })
            .finally(()=> setIsLoading(false))
    }, [url])

  return (
    [state, hasError, isLoading]
  )
}

export default useFetch
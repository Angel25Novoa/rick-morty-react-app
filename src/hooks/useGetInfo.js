import React, {useState, useEffect} from 'react'
import useFetch from './useFetch'
import {getInfo} from '../helpers/getInfo'

const useGetInfo = (input) => {
    const url = 'https://rickandmortyapi.com/api/character/'
    const [info, loading, error] = useFetch(url)
    console.log(info)
    const [state, setState] = useState({
      data: [],
      loading: true
    })

  
  useEffect(() => {
    getInfo(input)
      .then(results => {
        setState({
            data: results,
            loading: false
        })
      })
  }, [input])
}

export default useGetInfo
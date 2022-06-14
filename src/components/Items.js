import React from 'react'
import useGetInfo from '../hooks/useGetInfo'
import Item from './Item'

const Items = ({input}) => {

  const {data: results, loading} = useGetInfo(input)
  
  return (
    <>
      <h3>{input}</h3>
      {loading && <p>Loading...</p>}
      <div className='card-grid'>
        {
          results.map(res => (
            <Item 
              key={res.id}
              {...res}
              />
          ))
        }
      </div>
    </>
  )
}

export default Items
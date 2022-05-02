 import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';




const GifGrid = ({category}) => {

  const {data:imgs,loading} = useFetchGifs(category);
    

  return (
    <>
    <h3>{category}</h3>
    {loading && <p>Cargando...</p> }
    <div className='card-grid'>
        {
           imgs.map( img =>(
              <GifGridItem 
              key={img.id} 
              {...img}/>
           ))
        }
        
    </div>
    </>
  )
}


GifGrid.propTypes ={
  category:PropTypes.string.isRequired
}
export default GifGrid
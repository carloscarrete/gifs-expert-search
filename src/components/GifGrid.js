import React from 'react'
import GifGridItem from './GifGridItem';
import { useFetchImage } from '../hooks/useFetchImage';

const GifGrid = ({category}) => {

    
    const {loading, data} = useFetchImage(category);

    return (
        <>
            <h3>{category}</h3>
            {loading&& <h3 className="animate__animated animate__flash">Cargando...</h3>}
        <div className="card-grid">
            
                {data.map((item)=>{
                    return <GifGridItem 
                        {...item}
                        key={item.id}
                    />
                })}
            
        </div>
        </>
    )
}

export default GifGrid

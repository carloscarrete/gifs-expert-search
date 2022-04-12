import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

             <ul>
            {
                categories.map((myCat) => {
                        return <GifGrid  key={myCat} category={myCat}/>
                })
            }
            </ul>
        </div>
    )
}

export default GifExpertApp

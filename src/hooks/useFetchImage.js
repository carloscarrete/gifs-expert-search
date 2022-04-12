import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchImage = (category)=>{
    const [state, setState] = useState({
        loading: true,
        data: []
    })

    useEffect(()=>{
        /* getGifs(category).then(img=>{
            setTimeout(() => {
                setState({
                    loading: false,
                    data: img
                })
            }, 3000);
        }) */
        getGifs(category).then(img=>{
            setState({
                loading: false,
                data: img
            })
        })
    },[category])
    return state;
}
export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FJlGFL3VOjK5D74WvifZHGbjbftZiOfS`;
    const res = await fetch(url);
    const {data} = await res.json();
    const gifs = data.map((gif)=>{
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium
        }
    })

    return gifs;
        }


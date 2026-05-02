import {useState, useEffect} from 'react';
import axios from "axios";
import Shimmer from "./Shimmer";
import Card from "./Card";

const Shop = () => {
    const [response, setResponse] = useState([]);
   

    useEffect(() => {
        const getProducts = async () => {
            try {
                const {data} = await axios.get("https://api.theindianhome.in/api/product/list");
                setResponse(data?.products);             
            } catch (error) {
                console.log("Get product Error",error.response.data);
            }
        }
        getProducts()
    }, [])

    if(response.length === 0)
    {
        return <Shimmer/>
    }

  return (
    <div className='shop-container'>
        {
            response.map(product => <Card key={product.id} {...product} />)
        }
    </div>
  )
}

export default Shop;
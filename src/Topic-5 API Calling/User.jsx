import {useState, useEffect} from 'react'
import Shimmer from "./Shimmer";

const User = () => {

    const [response, setResponse] = useState("");


    useEffect(() => {

        // API Call
        const getUser = async () => {
            const res = await fetch("https://api.github.com/users/rajSresth",{cache:"no-store"});
            const data = await res.json();
            setResponse(data);
        }   

        getUser()
    }, [])

    if(!response)
    {
        return <Shimmer/>
    }

  return (
    <div className="card">
           <div className='profile'>
             <img src={response.avatar_url} alt="" />
           </div>
            <div className='info'>
                <h3>Id: {response.id}</h3>
                <h3>Account: {response.login}</h3>
                <h3>Username: {response.name}</h3>
            </div>
    </div>
  )
}

export default User
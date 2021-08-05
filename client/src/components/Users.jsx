import {useState, useEffect} from 'react'
import {verify} from "../services/users"

export default function Users() {
    const [data, setData] = useState([])

    useEffect(() => {
        handleData()
    }, [])
    //get all users to show
    async function handleData() {
        let res = await verify()
        setData(res)
        console.log(res)
    }
  // const showPosts 

    return (
        <div>
            {data.map(user => {
                return (
                <div key={user._id}>
                    <h4>{user.username}</h4>
                    <p>{user.email}</p>
                    
                
                </div>
                )
            })}
        </div>
    )
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



function Home() {
    const [users, setusers] = useState([])
    useEffect(() => {
        async function fetchdata(){
        try{
            const url="/users";
            const response=await axios.get(url)
            setusers(response.data)
        }catch(error){
            console.log(error)
        }
     }
     fetchdata()
    }, [users])
    const deleteuser=async(_id)=>{
        const url=`/user/${_id}`
        const response=await axios.delete(url)
        

    }
    
    return (
        <div className="mt-5">
            <div className="container">
                <Link to='add'><button className="btn btn-primary float-right mb-3" >Add </button></Link>
                <table className="table ">
                <thead className="thead-dark ">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">CNIC</th>
                        <th scope="col">Occupation</th>
                        <th scope="col"></th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,i)=>{
                        return(
                            <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td>{user.phoneno}</td>
                        <td>{user.cnic}</td>
                        <td>{user.occupation}</td>
                        <td className="d-flex justify-content-between">
                            <Link to={`edit/${user._id}`}><button className="btn btn-primary"><i className="fa-solid fa-pencil "></i></button></Link>
                            <button className="btn btn-warning" onClick={() => deleteuser(user._id)}><i className="fa-solid fa-trash"></i></button>
                        </td>
                        
                    </tr>
                        )
                    })}
            
                    
                   
                </tbody>
            </table>
            </div>
            
        </div>
    )
}

export default Home;
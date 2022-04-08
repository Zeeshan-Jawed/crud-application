import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams,useNavigate} from "react-router-dom";
function Edit() {
    
    const [user, setuser] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchdata(){
            try{
                const url=`/user/${id}`;
                const response=await axios.get(url)
                setuser(response.data[0])
                
            }catch(error){
                console.log(error)
            }
         }
         fetchdata()
        
    }, [])
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setuser(prevState => ({ ...prevState, [name]: value }));
    
    }
    const handleupdate = async e => {
        e.preventDefault();
        try {
            const url = `/user/${id}`;
            const payload = { ...user };
            const response = await axios.put(url, payload);
            console.log(response)
           navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
           <div className="container">
           <form>
                <div className="row">
                <div className="col-6 mt-3 form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={handleChange} defaultValue={user.name} placeholder="Enter name "/> 
                </div>
                <div className="col-6 mt-3 form-group">
                    <label htmlFor="name">Address</label>
                    <input type="text" className="form-control" onChange={handleChange} name="address" defaultValue={user.address} placeholder="Enter address "/> 
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="name">Phone No.</label>
                    <input type="number" className="form-control" onChange={handleChange} name="phoneno" defaultValue={user.phoneno} placeholder="Enter phone no. "/> 
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="name">CNIC</label>
                    <input type="number" className="form-control"onChange={handleChange}  name="cnic" defaultValue={user.cnic} placeholder="Enter CNIC "/> 
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="name">Occupation</label>
                    <input type="text" className="form-control" onChange={handleChange} name="occupation" defaultValue={user.occupation} placeholder="Enter occupation "/> 
                </div>
                </div>
                <button type="submit" onClick={handleupdate} className="btn btn-warning float-right">Update</button>
            </form>
           </div>
        </>
    )
}

export default Edit;
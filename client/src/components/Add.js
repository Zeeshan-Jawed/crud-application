import { useState } from "react";
import axios from 'axios';
import { useNavigate} from "react-router-dom";
function Add() {
    const INITIAL_USER = {
        name: '',
        address: '',
        phoneno:'',
        cnic:'',
        occupation:''

    };
    const navigate = useNavigate();
    const [user, setUser] = useState(INITIAL_USER)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `/user/`;
            console.log("first")
            const payload = { ...user };
            const response = await axios.post(url, payload);
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
                    <input type="text" className="form-control" name="name" onChange={handleChange} value={user.name} placeholder="Enter name "/> 
                </div>
                <div className="col-6 mt-3 form-group">
                    <label htmlFor="name">Address</label>
                    <input type="text" className="form-control" onChange={handleChange} name="address" value={user.address} placeholder="Enter address "/> 
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="name">Phone No.</label>
                    <input type="number" className="form-control" onChange={handleChange} name="phoneno" value={user.phoneno} placeholder="Enter phone no. "/> 
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="name">CNIC</label>
                    <input type="number" className="form-control"onChange={handleChange}  name="cnic" value={user.cnic} placeholder="Enter CNIC "/> 
                </div>
                <div className="col-6 form-group">
                    <label htmlFor="name">Occupation</label>
                    <input type="text" className="form-control" onChange={handleChange} name="occupation" value={user.occupation} placeholder="Enter occupation "/> 
                </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary float-right">Submit</button>
            </form>
           </div>
        </>
    )
}

export default Add;
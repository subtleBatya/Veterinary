import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../store/AuthSlice";

export default function ProductList() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch(); 

    const handleLogout = () => {
        dispatch(logout());
    };

    function getProducts(){
        fetch ("http://212.111.80.94/products")
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error()
        })
        .then(data => {
            setProducts(data)
        })
        .catch(error => {
            alert("Unable to get the data")
        })
    }

    useEffect(getProducts, [])


    return (
        <div className="container my-4">
            <h2 className=" text-center mb-4">Products</h2>
            
            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/admin/products/create">Create Product</Link>
                    <button type="button" className="btn btn-outline-primary"
                    onClick={getProducts}>Refresh</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className="col">

                </div>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    
                                    <td><img src={"  http://212.111.80.94/products/" + product.image } 
                                        width="100" alt="..." /></td>
                                    <td>{product.createdAt}</td>
                                    <td style={{width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/admin/products/edit/" + product.id}>Edit</Link>
                                        <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
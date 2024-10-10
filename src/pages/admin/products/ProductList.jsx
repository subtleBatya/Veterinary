import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
import {API_URL} from '../../../api/BrandApi'
import { logout } from "../../../store/AuthSlice";

export default function ProductList() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch(); 

    const handleLogout = () => {
        dispatch(logout());
    };
    
    useEffect(() => {
        const getProducts = async () => {
          try {
            const response = await axios.get(`${API_URL}/products`);
            setProducts(response.data);
          } catch (error) {
            console.error('Error fetching brands:', error);
          }
        };
    
        getProducts();
      }, []);

      const deleteProduct = async (id) => {
        try {
          await axios.delete(`${API_URL}/secret/product/${id}`);
          setProducts(products.filter(product => product._id !== id));
        } catch (error) {
          console.error('Error deleting product:', error.response?.data || error.message);
        }
      };


    return (
        <div className="container my-4">
            <h2 className=" text-center mb-4">Products</h2>
            
            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/Veterinary/admin/products/create">Create Product</Link>
                    <button type="button" className="btn btn-outline-primary"
                    onClick={() => getProducts()}>Refresh</button>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className="col">

                </div>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>ID</th>
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
                                    <td>{product._id}</td>
                                    <td>{product.brand_id?.name}</td>
                                    <td>{product.category_id?.name}</td>
                                    <td>{product.price}</td>
                                    
                                    <td>
                                    {product.image && (
                                        <div className=' w-[200px] h-[200px]'>
                                          <img src={`${API_URL}` + `${product.image}`   } alt="" />
                                        </div>
                                        )}
                                    </td>
                                    <td>{product.createdAt}</td>
                                    <td style={{width: "10px", whiteSpace: "nowrap" }}>
                                        <Link className="btn btn-primary btn-sm me-1" to={"/Veterinary/admin/products/edit/" + product._id}>Edit</Link>
                                        <button onClick={() => deleteProduct(product._id)} type="button" className="btn btn-danger btn-sm">Delete</button>
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
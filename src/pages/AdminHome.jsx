import React from "react"
import { Link } from 'react-router-dom'
function AdminHome() {
    return (
        <div className="">
            <h2>Welcome to our website</h2>
            <div className="flex gap-4 mt-3">
                    <div className=" rounded-md w-1/3 aspect-video bg-blue-200">
                        <Link to="/Veterinary/admin/categories">Categories</Link>
                    </div>
                    <div className=" rounded-md w-1/3 aspect-video bg-blue-200">
                    <Link to="/Veterinary/admin/products">Product List</Link>
                    </div>
                    <div className=" rounded-md w-1/3 aspect-video bg-blue-200">
                        <Link to="/Veterinary/admin/brands">Brands</Link>
                    </div>
            </div>
                        
        </div>
    )
};

export default AdminHome;
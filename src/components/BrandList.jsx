// src/components/BrandList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBrands } from '../api/BrandApi';

const BrandList = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const brandsData = await getAllBrands();
                setBrands(brandsData);
            } catch (error) {
                console.error('Error fetching brands:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBrands();
    }, []);
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <>
        <div>
            <h1>Brands</h1>
            <ul>
                {brands.map((brand) => (
                    <li key={brand._id}>{brand.name}</li>
                ))}
            </ul>
        </div>
        <button><Link to="/brands/create">Create Brand</Link></button>
        </>
        );
};

export default BrandList;
import React from "react";

const Product = ({ category }) => {
  return (
    // <div className="rounded-none aspect-auto cursor-pointer bg-white h-auto overflow-hidden">
    //   <div className="border-b-2">
    //     <div className="image mx-auto w-[220px] p-3 overflow-hidden">
    //       <img
    //         src={image || "path/to/default/image.jpg"} // Use a fallback image if none is provided
    //         className="object-cover transition-transform duration-300 transform hover:scale-110 w-full"
    //         alt={name}
    //       />
    //     </div>
    //   </div>

    //   <div className="ps-2 pb-3">
    //     <div className="flex bg-white text-darkColor line-clamp-2 text-lg font-bold pt-3 flex-col">
    //       <div>{name}</div>
    //     </div>
    //     <div className="text-goldColor text-sm font-semibold">
    //       {price} TM
    //     </div>
    //   </div>

    //   <div className="bg-green-500 rounded-b-lg text-center p-1 text-white">
    //     Add to Cart
    //   </div>
    // </div>


    <div className="rounded-none aspect-auto cursor-pointer bg-white h-auto overflow-hidden">
      <div className="border-b-2">
        <div className="image mx-auto w-[220px] p-3 overflow-hidden">
          <img
            src={category.image || 'path/to/default/image.jpg'}
            className="object-cover transition-transform duration-300 transform hover:scale-110 w-full"
            alt={category.name}
          />
        </div>
      </div>
      <div className="ps-2 pb-3">
        <div className="text-darkColor font-bold text-lg pt-3">{category.name}</div>
        <div className="text-goldColor text-sm font-semibold">{category.price} TM</div>
      </div>
      <div className="bg-green-500 rounded-b-lg text-center p-1 text-white">
        Sebede gosun
      </div>
    </div>
  );
};

export default Product;



// <div className='rounded-none aspect-auto cursor-pointer bg-white h-auto overflow-hidden'>
        //     <div className=' border-b-2'>
        //         <div className="image mx-auto w-[220px] p-3 overflow-hidden">
        //             <img src={imager} className=' object-cover transition-transform duration-300 transform hover:scale-110  w-full  ' alt="Product" />
        //         </div>
        //     </div>
            
            
        //     <div className='ps-2 pb-3'>
        //         <div className="flex bg-white text-darkColor line-clamp-2 text-lg  font-bold pt-3 flex-col">
        //             {/* <div>{t('newsText')}</div> */}
        //             <div>Folley Kateter</div>
        //         </div>
        //         <div className='text-goldColor text-sm font-semibold'>
        //         200.50 TM
        //         </div>
        //     </div>
        //     <div className=' bg-green-500 rounded-b-lg text-center p-1 text-white'>
        //         Sebede gosun
        //     </div>
            

        //      {/* Products Section */}
        // {/* <div className="esas_container mt-5 space-y-4">
        //   <div className="flex mx-auto justify-between items-center">
        //     <div className="h3">Products from Category 1 (cate1)</div>
        //   </div>
        //   <div className="grid sm:md:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        //     {/* Map through products belonging to 'cate1' 
        //     {products.map(product => (
        //       <div key={product._id}>
        //         <h3>{product.name}</h3>
        //         <p>Price: ${product.price}</p>
        //         {/* Use correct image field 
        //         <img src={product.image} alt={product.name} />
        //       </div>
        //     ))}
        //   </div>
        // </div> */}
            
        // </div>
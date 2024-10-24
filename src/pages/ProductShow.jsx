import React from "react";

function ProductShow() {
  return(
    <div className="max-w-6xl m-auto gap-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:my-2 md:my-3 lg:my-4">
            <div className="sm-mx-2 md:mx-0 lg:mx-0 flex justify-center">
                <img className="w-64 md:w-auto lg:w-full sm:h-64 md:h-72 lg:h-96" src="photo.png" alt="image" />
            </div>
            <div className="ml-10">
                <h1 className="text-xl font-bold pb-3 text-start">Product name</h1>
                <span className="font-medium">price TMT</span>
                <p className="py-3">description Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio maiores sit unde veritatis doloribus quas debitis voluptate, quos iusto ipsum voluptatem consectetur quidem officiis perspiciatis cumque nihil ad qui?</p>
                <div className="flex items-center gap-3">
                    <img className="w-28 rounded-full" src="Logo.png" alt="" />
                    <span>brand name</span>
                </div>
                <p className="py-2">Category name</p>
                <hr className="border-2 my-3"/>
                <div className="flex">
                    <div className="border rounded-md">
                        <button className="border-r-2 px-3 py-2 font-medium w-[40px] h-[44px]">-</button>
                        <span className="px-4">0</span>
                        <button className="rounded-r-md w-[41px] h-[44px] bg-[#DB4444] text-white">+</button>
                    </div>
                    <div className="mx-4">
                        <button className="border rounded-md w-[165px] h-[44px] bg-[#DB4444] text-white">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
                <img className="w-full rounded-md border-2" src="photo.png" alt="" />
                <p className="mb-3 mt-2 font-semibold h-3">Product name</p>
                <p className="mb-3">pricee</p>
                <button className="w-full text-white border rounded-md bg-black py-2">Add to cart</button>
            </div>
            <div>
                <img className="w-full rounded-md border-2" src="photo.png" alt="" />
                <p className="mb-3 mt-2 font-semibold h-3">Product name</p>
                <p className="mb-3">pricee</p>
                <button className="w-full text-white border rounded-md bg-black py-2">Add to cart</button>
            </div>
            <div>
                <img className="w-full rounded-md border-2" src="photo.png" alt="" />
                <p className="mb-3 mt-2 font-semibold h-3">Product name</p>
                <p className="mb-3">pricee</p>
                <button className="w-full text-white border rounded-md bg-black py-2">Add to cart</button>
            </div>
            <div>
                <img className="w-full rounded-md border-2" src="photo.png" alt="" />
                <p className="mb-3 mt-2 font-semibold h-3">Product name</p>
                <p className="mb-3">pricee</p>
                <button className="w-full text-white border rounded-md bg-black py-2">Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductShow;

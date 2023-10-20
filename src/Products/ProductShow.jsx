import { Link } from "react-router-dom";


const ProductShow = ({product}) => {
   
    return (
        <div>
             
<div class="max-w-sm border border-gray-200 rounded-lg shadow bg-blue-200 dark:bg-gray-800 dark:border-gray-700">
    <div>
        <img class="rounded-t-lg w-full h-[250px]" src={product.image} alt="" />
    </div>
    <div class="p-5">
        <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.brand}</h5>
        </div>
        <div className="flex justify-between">
            <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white" > cetagory : {product.category}</p>
            <p class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"> price :{product.price}</p>

        </div>
        <p class="mb-3 font-normal text-gray-800 dark:text-gray-400">keep in mind that each type of food can come in countless variations and regional specialties.</p>
        <div className="flex justify-between items-center" >
            <Link to={`/products/${product._id}`}>
        <button  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Details
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </Link>
        <Link to={`/update/${product._id}`}>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button></Link>
        </div>
    </div>
</div>

        </div>
    );
};

export default ProductShow;
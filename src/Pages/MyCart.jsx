import { useLoaderData } from "react-router-dom";
import Cart from "./cart";


const MyCart = () => {

const myCard=useLoaderData()
console.log(myCard);




    return (
        <div>
            <section class="bg-gray-700 dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
 <div class="max-w-screen-md mb-8 lg:mb-16 text-center md:mr-10 lg:ml-48">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Designed for business teams like yours</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">

             {
                myCard?.map(cart=> <Cart key={cart.id} cart={cart}></Cart>)
            }
            </div>
        </div>
        </section>
        </div>
    );
};

export default MyCart;
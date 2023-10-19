import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";

import Footer from "./Footer";
import Gellery from "./Gellery";
import Testimonial from "./Testimonial";
import Cards from "../homeCard/Cards";



const Home = () => {
    const cards = useLoaderData();
   
    return (
        <div>
           
           <Banner></Banner>
           <Cards cards={cards} ></Cards>
           <Gellery></Gellery>
           <Testimonial></Testimonial>

           <Footer></Footer>



        </div>
    );
};

export default Home;
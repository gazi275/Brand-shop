import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import Card from "./Card";
import Footer from "./Footer";
import Gellery from "./Gellery";
import Testimonial from "./Testimonial";



const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Banner></Banner>
           <Card></Card>
           <Gellery></Gellery>
           <Testimonial></Testimonial>

           <Footer></Footer>



        </div>
    );
};

export default Home;
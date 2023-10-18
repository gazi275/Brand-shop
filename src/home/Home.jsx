import Banner from "../component/Banner";
import Navbar from "../component/Navbar";
import Card from "./Card";
import Footer from "./Footer";



const Home = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Banner></Banner>
           <Card></Card>

           <Footer></Footer>



        </div>
    );
};

export default Home;
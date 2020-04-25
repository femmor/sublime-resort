import React from 'react';
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import Services from "../components/Services"
import Featured from "../components/Featured"

const Home = () => {
    return (
        <>
           <Hero>
               <Banner title="luxurious home" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">View Rooms</Link>
                </Banner>
           </Hero> 
           <Services/>
           <Featured/>
        </>
    );
}

export default Home;
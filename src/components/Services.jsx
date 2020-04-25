import React, { Component } from 'react';
import Title from "../components/Title"
import { FaHiking, FaCocktail, FaShuttleVan, FaBeer } from "react-icons/fa"

class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Conctails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita" 
            },
            {
                icon: <FaHiking/>,
                title: "Free Hicking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita" 
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle Van",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita" 
            },
            {
                icon: <FaBeer/>,
                title: "Free Beers",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita" 
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((service, index) => {
                        return(
                            <article className="service" key={index}>
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Services;

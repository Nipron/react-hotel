import React, {Component} from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/all";

class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nihil."
            },
            {
                icon: <FaHiking/>,
                title: "Endless hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nihil."
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nihil."
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, nihil."
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item, i) => {
                        return <article key={i} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}

export default Services;
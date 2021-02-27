import React, {Component} from 'react';
import logo from '../images/syndhotel.png';
import {FaAlignRight} from "react-icons/all";
import {Link} from 'react-router-dom'
import {weatherAPI} from "../API/api";

class Navbar extends Component {

    state = {
        isOpen: false,
        CityName: 'Hradec Kralove',
        CityTemp: '280',
        CityIcon: '13d'
    }

    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    componentDidMount() {
        weatherAPI.getWeather(this.state.CityName).then(data => {
            this.setState({CityTemp: data.main.temp,
            CityIcon: data.weather[0].icon});
        });
    }

    render() {

        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link className="nav-el" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="nav-el" to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                    <div className="weather">
                        <span>Hradec Kralove {Math.round(this.state.CityTemp - 273.15)}{/*{'\u2103'}*/} </span>
                        <img src={`https://openweathermap.org/img/wn/${this.state.CityIcon}@2x.png`}/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
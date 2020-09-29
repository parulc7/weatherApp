import React from 'react';
import WeatherContainer from '../Components/Weather';
import Axios from 'axios';
export default class CityForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            isSubmitted:false,
            city:"",
            data:{},
            location:""
        }
    }

    getData(city) {
        const API_KEY = "2d2f80552fba4e18bdc142153202909";
        Axios.get('https://api.weatherapi.com/v1/current.json?key='+API_KEY+'&q='+city)
            .then((response) => {
                // console.log(response.data)
                this.setState({
                    location: response.data.location.name + ', ' + response.data.location.region,
                    data: response.data.current
                })
                // console.log(this.state.data.location.name)
            })
            .then(setTimeout(1000, this.setState({isLoading:false})))
    }

    handleChange = (e) =>{
        // console.log(e.target.value)
        this.setState({
            city:e.target.value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            isSubmitted:true
        });
        this.getData(this.state.city);
    }

    render() {
        return (
            <div className='container'>
            <div className="mx-auto container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <input onChange={this.handleChange} type="text" className="form-control" placeholder="How's the weather in .. " />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
                {this.state.isSubmitted===true && this.state.isLoading===false && <WeatherContainer data={this.state.data} location={this.state.location} />}
            </div>
        )
    }
}
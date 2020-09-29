import React from 'react';

export default class WeatherContainer extends React.Component {
    render() {
        var d = new Date(this.props.data.last_updated)
        var date_updated = d.toUTCString()
        return (
            <div className="card text-center">
                <div className="card-header">
                    {this.props.location}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Current Weather Report </h5>
                    <p className="card-text">Actual Temperature : {this.props.data.temp_c} degree Celsius</p>
                    <p className="card-text">Feels Like : {this.props.data.feelslike_c} degree Celsius</p>
                    <p className="card-text">Humidity : {this.props.data.humidity} %</p>
                    <p className="card-text">Wind Speed : {this.props.data.wind_kph} kph</p>
                </div>
                <div className="card-footer text-muted">
                    Last Updated : {date_updated}
                </div>
            </div>
        );
    }
}
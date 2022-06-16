import React from "react";
import { Card } from "react-bootstrap";

export default function WeatherCard({ weatherData }) {
  return (
    <Card className="text-center">
      <Card.Header>City : {weatherData.name}</Card.Header>
      {typeof weatherData.main != "undefined" ? (
        <Card.Body>
          <Card.Title>Todays Weather</Card.Title>
          <Card.Text>
            <p>
              Temprature: {weatherData.main.temp} &deg;C Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")} <br />
              Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")} <br />
              Description: {weatherData.weather[0].main} <br />
              Humidity: {weatherData.main.humidity} %
            </p>
          </Card.Text>
        </Card.Body>
      ) : (
        <div></div>
      )}
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}

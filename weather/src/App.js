import React,{Component} from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "d9e3288f4db41de03dd27fb945e95977";

// (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

// api.openweathermap.org/data/2.5/weather?q=Almaty,kz&APPID=d9e3288f4db41de03dd27fb945e95977
class App extends Component {

  state = {
    temperature : undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }  

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country =  e.target.elements.country.value;
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""


    })
    
  }

  render() {

    return(
      <div>
      <Title />
      <Form
      getWeather={this.getWeather} 
      />
      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}


      />
      </div>

      );
    }


  }

  export default App;
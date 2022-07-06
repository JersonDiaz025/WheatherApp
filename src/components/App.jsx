import { getWeatherInfo } from '../hooks/useWeatherData';
import Loader from './Loader';
import Content from './Content';

const App = () => {
  /* Calling the function `getWeatherInfo()` from the `useWeatherData.js` file. */
  const data = getWeatherInfo();
  console.log(data)

  /* Destructuring the data from the API. */
  if(data) {
    const { code, icon, text} = data.current.condition;
    const { cloud, humidity, is_day, temp_c, temp_f, last_updated, } = data.current;
    const { name, country, localtime } = data.location;

    return (
        <div>
          <Content name={name} country={country} localtime={localtime} icon={icon} cloud={cloud}/>
        </div>
    );

    console.log(country)
  }else {
    return <Loader/>
  }


  // return (
  //   <div>
  //     <Title text={text} />
  //     <Content />
  //   </div>
  // );
}

export default App;

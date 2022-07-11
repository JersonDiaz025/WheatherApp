
// import Loader from './Loader';
// import Content from './Content';
import Header from './Header';

const App = () => {
  /* Calling the function `getWeatherInfo()` from the `useWeatherData.js` file. */
  // const data = getWeatherInfo(inputValue);
  // console.log(data)

  /* Destructuring the data from the API. */
  // if(data) {
    // const { code, icon, text} = data.current.condition;
    // const { cloud, humidity, is_day, temp_c, temp_f, last_updated, } = data.current;
    // const { name, country, localtime } = data.location;

    return (
        <div>
          <Header/>
        </div>
    );
  }

export default App;

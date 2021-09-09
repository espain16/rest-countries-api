import './App.css';
import CountriesData from './components/Countries';
import FilterCountry from './components/Filter';
import Header from './components/Header';
import Search from './components/Search';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header/>
        <Toggle/>
      </div>
      <section className="search-and-filter">
        <Search/>
        <FilterCountry/>
      </section>
      <section className="countries">
        <CountriesData/>
      </section>
    </div>
  );
}

export default App;

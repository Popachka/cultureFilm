import FilmsSection from './components/filmsSection/FilmsSection';
import Header from './components/Header/Header';
import SearchSection from './components/searchSection/SearchSection';

function App() {
  return (
    <div className="site-container">
      <Header />
      <SearchSection />
      <FilmsSection />
    </div>
  );
}

export default App;

import './App.css';
import Provider from './components/ProviderComponent';

const App = () => {
  return (
    <div className="content">
      <Provider strategy='trending' title="Trending" onAddToCart={() => {}} />
      <Provider strategy='best-sellers' title="Best Sellers" onAddToCart={() => {}} />
    </div>
  );
};

export default App;

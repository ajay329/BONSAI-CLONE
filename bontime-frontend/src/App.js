import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import { BonsaiCash } from './Pages/ProductPage/Bonsai_Cash';
import { BonsaiTax } from './Pages/ProductPage/Tax_page';



function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      {/* <BonsaiCash/> */}
      <BonsaiTax/>
    </div>
  );
}

export default App;
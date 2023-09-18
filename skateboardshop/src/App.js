import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AllRoutes/>
    </div>
  );
}

export default App;

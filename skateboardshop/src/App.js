import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
const middleLinks = [
  {
    tab: "SURFSCATES",
    path: "products",
  },
  {
    tab: "EXTRAS",
    path: "",
  },
  {
    tab: "CLOTHES AND ACCESSORIES",
    path: "",
  },
  {
    tab: "SALE",
    path: "",
  },
]; 



function App() {
  return (
    <div className="App">    
        <Navbar middleLinks={middleLinks}/>
        <AllRoutes/>   
        <Footer/> 
    </div>
  );
}

export default App;

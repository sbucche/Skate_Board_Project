import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./components/Navbar";
import "./App.css";
const middleLinks = [
  {
    tab: "SURFSCATES",
    path: "",
  },
  {
    tab: "EXTRAS",
    path: "login",
  },
  {
    tab: "CLOTHES AND ACCESSORIES",
    path: "products",
  },
  {
    tab: "SALE",
    path: "xyz",
  },
]; 

const endLinks = [
  {
    tab: "SEARCH",
    path: "sdf",
  },
  {
    tab: "WISHLIST",
    path: "dfg",
  },
  {
    tab: "BAG",
    path: "cart",
  }
];



function App() {
  return (
    <div className="App">    
        <Navbar middleLinks={middleLinks} endLinks={endLinks}/>
        <AllRoutes/>    
    </div>
  );
}

export default App;

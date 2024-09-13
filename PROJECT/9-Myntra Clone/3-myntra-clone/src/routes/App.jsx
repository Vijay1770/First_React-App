import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import Loader from "../components/Loder";
function App() {

const  fetchStatus=useSelector((store)=>store.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <Loader/>:<Outlet/>}
      <Footer></Footer>
    </>
  );
}

export default App;

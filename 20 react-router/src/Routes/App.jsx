import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <div className="content">
          <Header />
          <Outlet /> {/* This is where nested routes will be rendered */}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

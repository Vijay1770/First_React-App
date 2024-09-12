import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeItem from "./components/HomeItem";

function App() {
  const item={ 
    "id": "003",
    "image": "images/3.jpg",
    "company": "NUEVOSDAMAS",
    "item_name": "Women Red & White Printed A-Line Knee-Length Skirts",
    "original_price": 1599,
    "current_price": 495,
    "discount_percentage": 69,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": {
      "stars": 4.1,
      "count": 249
    }
  };

  return (
    <>
      <Header></Header>
      <main>
        <div className="items-container">
          <HomeItem item={item}></HomeItem>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

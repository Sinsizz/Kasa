import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import data from "./data.json";

function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Footer />
    </>
  );
}

export default App;

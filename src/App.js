import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Container from "./components/Container";

function App() {
  const [ id, setId ] = useState('1');

  const handleIdChange = (id) => {
    setId(id);
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', height: '300px' }}>
        <Navigation onClick={handleIdChange} />
        <Container id={id} />
      </div>
    </div>
  );
}

export default App;
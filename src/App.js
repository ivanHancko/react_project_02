
import './App.css';

import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './components/data';

const App = () => {
  const allData = data.map ( item => {
    return <Card 
      key = {item.id}
      item = {item}
  >
  </Card>
  })

  console.log(allData);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <section>
          {allData}
      </section>
    
    </>
    
  );
}

export default App;

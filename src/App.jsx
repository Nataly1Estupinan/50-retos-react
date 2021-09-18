import { RetosGrid } from "./RetosGrid";

import { Footer } from "./Footer";
import Search from "./Search";
import retos from './retos';
import { Header } from "./Header";


function App() {
  return (
    <div>
     
      <Header/>
        <Search placeholder="Introduce el nombre de un reto..." data={retos}/>
        <RetosGrid />
        <Footer />
      
    
      
      
    </div>
  );
}

export default App;

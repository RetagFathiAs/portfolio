import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary bg-cover bg-no-repeat bg-center'>
      <StarsCanvas />
          <Navbar />
          
          <Hero />
          
      
        
      <About />
        <Experience />

        
      
        <Tech />

        <Works />
        
        
       <Contact />
     
      </div>
    </BrowserRouter>
  );
}

export default App;

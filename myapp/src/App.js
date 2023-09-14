import { useState } from 'react';
import './App.css';
import Axios from 'axios'


function App() {
const [ urName,  seturName]= useState("")
const [fetchData , setfetchData]=useState (null)

  return (
    <>
    <div className="App">
      <Router>
        <div  className='navbar'>
<Link to="/"  >   Home  </Link>
<Link to="/menu"  >  Menu  </Link>
<Link to="/contact"  >   Contact  </Link>

        </div>
<Routes>
<Route path="/"   element={ <Home/>}  />
<Route path="/menu"   element={ <Menu/>}  />
<Route path="/contact"   element={ <Contact/>}  />


</Routes>

      </Router>
    </div>
    </>
  );
  
}

export default App;

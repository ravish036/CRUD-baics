import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Users from './main_components/Users'
import CreateUsers from './main_components/CreateUsers'
import UpdateUsers from './main_components/UpdateUssers'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUsers />}></Route>
          <Route path='/update' element={<UpdateUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

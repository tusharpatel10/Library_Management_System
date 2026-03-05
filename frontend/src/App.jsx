import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componets/pages/Home'
import Courses from './componets/pages/courses'
import Detaile from './componets/pages/Detail'
import Login from './componets/pages/Login'
import Registration from './componets/pages/Registration'
import Checkout from './componets/pages/Checkout'
import MyCourses from './componets/pages/MyCourses'
import EnrolledCourses from './componets/pages/EnrolledCourses'
import WatchCourses from './componets/pages/WatchCourses'
import ChangePassword from './componets/pages/ChangePassword'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Detail' element={<Detaile />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/MyCourses' element={<MyCourses />} />
          <Route path='/EnrolledCourses' element={<EnrolledCourses />} />
          <Route path='/WatchCourses' element={<WatchCourses />} />
          <Route path='/ChangePassword' element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

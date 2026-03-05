import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componets/pages/Home'
import Courses from './componets/account/courses'
import Detaile from './componets/pages/Detail'
import Login from './componets/pages/Login'
import Registration from './componets/pages/Registration'
import Checkout from './componets/pages/Checkout'
import MyCourses from './componets/account/MyCourses'
import EnrolledCourses from './componets/account/EnrolledCourses'
import WatchCourses from './componets/account/WatchCourses'
import ChangePassword from './componets/account/ChangePassword'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Detail' element={<Detaile />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/account/courses' element={<Courses />} />
          <Route path='/account/MyCourses' element={<MyCourses />} />
          <Route path='/account/enrolled-courses' element={<EnrolledCourses />} />
          <Route path='/account/Watch-courses' element={<WatchCourses />} />
          <Route path='/account/change-password' element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

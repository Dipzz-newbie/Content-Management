import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router"
import Layout from './components/Layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes element={<Layout/>}>
        <Route path='/register' element={<div>Register</div>} >

        </Route>
        <Route path='/dashboard'>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

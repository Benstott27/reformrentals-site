import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Studios from './pages/Studios.jsx'
import HomeUse from './pages/HomeUse.jsx'
import Equipment from './pages/Equipment.jsx'
import C8Pro from './pages/C8Pro.jsx'
import R8Pro from './pages/R8Pro.jsx'
import Chairs from './pages/Chairs.jsx'
import Contact from './pages/Contact.jsx'
import SpacePlanner from './pages/SpacePlanner.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/studios" element={<Studios />} />
        <Route path="/home-use" element={<HomeUse />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/equipment/c8-pro" element={<C8Pro />} />
        <Route path="/equipment/r8-pro" element={<R8Pro />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/space-planner" element={<SpacePlanner />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

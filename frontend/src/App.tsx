import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tecnicos from './pages/Tecnicos'

function App() {
  return (
    <BrowserRouter>
      <nav className=""bg-blue-900 text-white p-4 flex gap-6 shadow-md"">
        <Link to=""/"" className=""hover:text-blue-200 font-bold"">Dashboard</Link>
        <Link to=""/tecnicos"" className=""hover:text-blue-200"">Técnicos</Link>
      </nav>
      <main className=""bg-gray-50 min-h-screen"">
        <Routes>
          <Route path=""/"" element={<Dashboard />} />
          <Route path=""/tecnicos"" element={<Tecnicos />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
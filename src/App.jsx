import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FeatureDetail from "./pages/FeatureDetail"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feature/:id" element={<FeatureDetail />} />
    </Routes>
  )
}
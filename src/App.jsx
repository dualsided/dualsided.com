import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Work from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import ShopifyApps from './pages/ShopifyApps'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Work />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<ProjectDetail />} />
        <Route path="shopify-apps" element={<ShopifyApps />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App

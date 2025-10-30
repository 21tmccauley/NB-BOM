import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { HomePage } from "./pages/HomePage"
import { BlogPostPage } from "./pages/BlogPostPage"
import { AboutPage } from "./pages/AboutPage"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

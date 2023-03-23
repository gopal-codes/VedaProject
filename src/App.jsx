import './App.css'
import Navbar from './components/Navbar/Navbar'
import SnackBar from './components/SnackBar'
import Header from './pages/Header/Header'
import Testimonial from './pages/Testimonial/Testimonial'
import Question from './pages/Question/Question'
import RelatedProduct from './pages/RelatedProduct/RelatedProduct'
import Recipe from './pages/Recipes/Recipe'

function App() {

  return (
    <div className="App">
      <SnackBar />
      <Navbar />
      <Header />
      <RelatedProduct />
      <Question />
      <Testimonial />
      <Recipe />
    </div>
  )
}

export default App

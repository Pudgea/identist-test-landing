import './App.scss'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Services from './components/services/services'
import Review from './components/review/review'
import Principles from './components/principles/prinsiples'
import Team from './components/team/team'
import Reviews from './components/reviews/reviews'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="container">
        <Hero/>
        <div id="about">
          <Review/>
        </div>
        <div id="services">
          <Services/>
        </div>
        <div id="principles">
          <Principles/>
        </div>
        <div id="team">
          <Team/>
        </div>
        <div id="reviews">
          <Reviews/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App

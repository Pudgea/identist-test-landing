import './App.scss'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import CheckUp from './components/checkup/checkup'
import Services from './components/services/services'
import Review from './components/review/review'
import Principles from './components/principles/prinsiples'
import Team from './components/team/team'
import Works from './components/works/works'
import Reviews from './components/reviews/reviews'
import Footer from './components/footer/footer'
import Approaches from './components/approach/approaches'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="container">
        <Hero/>
        <CheckUp/>
        <div id="about">
          <Review/>
        </div>
        <Approaches/>
        <div id="services">
          <Services/>
        </div>
        <div id="principles">
          <Principles/>
        </div>
        <div id="team">
          <Team/>
        </div>
        <Works/>
        <div id="reviews">
          <Reviews/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App

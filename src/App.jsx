import Footer from '../components/Footer'
import Header from '../components/Header'
import './App.css'
function App() {
  return (
    <>
    <Header/>
      <main>
        <button className="btl btl-primary">Click me!</button>
        <button className="btl btl-warning">Click me!</button>
        <button className="btl btl-danger">Click me!</button>
      </main>
      <Footer/> 
    </>
  )
}

export default App

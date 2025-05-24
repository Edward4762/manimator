import './App.css'
import MainContent from './MainContent';

const MyProjects = () => {
  return(
  <div>
    MyProjects
  </div>)
}
const Community = () => {
  return(
  <div>
    Community
  </div>)
}
const Footer = () => {
  return(
  <div>
    Footer
  </div>)
}

function App() {
  return (
    <div className='w-full h-full'>
      <MainContent />
      <MyProjects />
      <Community />
      <Footer />
    </div>
  )
}

export default App

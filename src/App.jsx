import Loan from './Loan.jsx'
import HowItWorks from './HowItWorks.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import Newsletter from './Newsletter.jsx'
import LoginPage from './pages/LoginPage.jsx'
import './App.css'

function App() {
  return (
    <>
      <Loan />
          <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>
       <HowItWorks />
       <Newsletter />
       <LoginPage />
    </>
  )
}

export default App
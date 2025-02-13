
import './App.css'
import Home from './components/Home'
import { UserProvider } from './context/usersContext'

function App() {
  

  return (

    <UserProvider>
      <Home/>
    </UserProvider>

  )
}

export default App

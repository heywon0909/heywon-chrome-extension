
import { RouterProvider } from 'react-router'
import './App.css'
import './index.css'
import { router } from './route/route'



function App() {
  return (<RouterProvider router={router}/>)
}

export default App

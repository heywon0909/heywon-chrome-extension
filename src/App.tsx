import styles from './App.module.css'
import './App.css'

import { Logo } from 'bunney-ui/Logo'
import { MadBunney } from 'bunney-ui/MadBunney'



function App() {
  

  return (
    <>
      <div>
        <div className={styles.flex_col}>
        <div className={styles.flex}>
          <h1 className={styles.title}>SCREEN TRACKER</h1>
          <Logo size={3} />
        </div>
        <div>  
          <h3 className={styles.detail}>with JumpingBunnney</h3>
        </div>
        </div> 
          <div className={styles.content}>
          <MadBunney count={3} />
        </div>
        <button>choose option</button>
      </div>
       
    </>
  )
}

export default App

import { Logo } from 'bunney-ui/Logo'
import styles from './Root.module.css'
import { MadBunney } from 'bunney-ui/MadBunney'
import { Link } from 'react-router'
export const Root = () => {
    return (
        <>
        <div>
        <div className={styles.flex_col}>
        <div className={styles.flex}>
          <h1 className={styles.title}>SCREEN TRACKER</h1>
          <Logo size={3} />
        </div>
        <div>  
          <h3 className={styles.detail}>with MadBunney</h3>
        </div>
        </div> 
          <div className={styles.content}>
          <MadBunney count={3} />
        </div>
        <Link to='/setting' className={styles.but}>choose option</Link>
        </div>
        </>
    )
}
import { MadBunney } from "bunney-ui/MadBunney";
import { useState } from "react";
import { useNavigate } from "react-router"
import styles from './setting.module.css'

export const Setting = () => {
    const [count,_setCount] = useState(1)
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    return (<div className={styles.flex}>
        <div className={styles.but_container}>
        <button onClick={goBack}>go back</button>
        </div>
        <div className={styles.flex_row}>
        <div className={styles.show}>
            <MadBunney count={count} />
        </div>
        <div className={styles.title}>
            <h2>settings</h2>
        </div>
        </div>    
        </div>)
}
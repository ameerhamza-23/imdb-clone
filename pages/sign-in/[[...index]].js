import { SignIn } from '@clerk/nextjs'
import styles from '@/styles/Signin.module.css'

export default function Page() {
    return (<div className={styles.center}>
        <SignIn />
    </div>)
}
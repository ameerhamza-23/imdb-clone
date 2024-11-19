import { SignUp } from '@clerk/nextjs'
import styles from '@/styles/Signup.module.css'

export default function Page() {
    return (
        <div className={styles.center}>
            <SignUp />
        </div>
    )
}
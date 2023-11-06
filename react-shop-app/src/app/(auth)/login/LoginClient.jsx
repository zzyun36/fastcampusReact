'use client'
import React , {useState} from 'react'

import LogoPath from '@/assets/colorful.svg';
import { useRouter } from 'next/navigation';

import styles from './Auth.module.scss'

const LoginClient = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isAutoLogin, setIsAutoLogin] = useState(false);

    const router = useRouter();
    
    const redirectUser = () => {
        router.push('/');
    }

    const loginUser = (e) => {
        e.preventDefault();
        setIsLoading(true);
    }

    const singInWithGoogle = () => {

    }

    return (
        <>
           <section className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.logo}>
                        <Image src={LogoPath}></Image>
                    </h1>
                    <form className={styles.form}onSubmit={loginUser}>
                        {/* input */}
                        <div className={styles.group}>
                            {/* 자동로그인, 비밀번호수정 */}
                        </div>
                        <div className={styles.buttonGroup}>
                            {/* button */}
                            <div>
                                {/* button */}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default LoginClient
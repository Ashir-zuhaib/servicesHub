import React from 'react'
import Styles from './login.module.css'
import ellipseFilled from '../../public/Static/avatar.svg'
import ellipse from '../../public/Static/avatar.svg'
import dawaai from '../../public/logo.png'
import Image from 'next/image'

export default function ViewHeader() {
    return (
        <div style={{position: 'relative', height:"15vh"}}> 
            <div className={Styles.ellipse1}>
                <Image src={ellipseFilled} alt='ellipse' />
            </div>
            <div className={Styles.ellipse2}>
                <Image src={ellipse} alt='ellipse'/>
            </div>
            <div className={Styles.logo}>
                <Image src={dawaai} alt='Dawaai Corporate'/>
            </div>
        </div>
    )
}

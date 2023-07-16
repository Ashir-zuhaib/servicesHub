import React from 'react'
import Styles from './signup.module.css'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import ViewHeader from '../Login/ViewHeader'
import pakistan from '../../public/Login/pakistan.png'

export default function SignupView() {

    return (
        <Grid container className={Styles.gridBack} item xs={12} md={8}>
                    <Grid item xs={12}>
                        <ViewHeader/>
                    </Grid>
                    <Grid item style={{display: 'flex', alignItems: "flex-end", marginLeft: '5%'}}>
                        <Typography className={Styles.aboutDawaai} variant='h4'>Service Hub is Service Providing Company</Typography>
                    </Grid>
                    <Grid item style={{display: 'flex', alignItems: "flex-end"}}>
                        <div className={Styles.pngPak}>
                            <Image src={pakistan} alt='Pakistan'/>
                        </div>
                    </Grid>
                </Grid>
    )
}

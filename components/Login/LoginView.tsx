import React from 'react'
import Styles from './login.module.css'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import ViewHeader from './ViewHeader'
import pakistan from '../../public/Login/pakistan.png'

export default function LoginView() {

    return (
        <Grid container className={Styles.gridBack} item xs={12} md={8}>
                    <Grid item xs={12}>
                        <ViewHeader/>
                    </Grid>
                    <Grid item style={{display: 'flex', alignItems: "flex-end", marginLeft: '5%'}}>
                        <Typography className={Styles.aboutDawaai} variant='h4'>An Employee Medical Benefits Platform Designed For Enterprises To Support Their Employees</Typography>
                    </Grid>
                    <Grid item style={{display: 'flex', alignItems: "flex-end"}}>
                        <div className={Styles.pngPak}>
                            <Image src={pakistan} alt='Pakistan'/>
                        </div>
                    </Grid>
                </Grid>
    )
}

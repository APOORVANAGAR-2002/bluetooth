import { Grid, Typography } from '@mui/material';
import React from 'react';
import Navbar from "../components/Navbar";
import Category from './Category';

function Landing() {
    return (
        <div>
            <Navbar />
            <Grid container style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h6" style={{
                        textAlign: 'center',
                        padding: '20px'
                    }}>Manually select your skin color</Typography>
                    <Category />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <h1>Upload photo</h1>
                </Grid>
            </Grid>
        </div>
    )
}

export { Landing };
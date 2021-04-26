import Link from "next/link";
import Container from "@material-ui/core/Container";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function AboutUs() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return  (
    <Container maxWidth="sm">

        <h4><Link href="/"><a>Back to home</a></Link></h4>

        <Card className={classes.root}>
            <CardContent>

                <Typography component="p">
                    Bheed toh dekhi hogi na aapne? Bheed mein se koi ek shakal chun lijiye, main woh hoon.
                    <br/>

                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    -Naseeruddin Shah, Wednessday
                </Typography>
                <Typography variant="body2" component="p">
                    We are going through difficult times.Having correct information can be matter of life and death.
                    We are trying to centralize all information at one place.Our aim is to minimize efforts required
                    to gather any info anyone may require when their loved ones need medicine/oxygen/hospital.
                    <br/>

                </Typography>
                <Typography  variant="h5" component="h2">
                    <br/>
                    We are in this together, we will fight it.
                    <br/>
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    <br/>
                    Our team always try to verify info before posting, however if any of info leads negative, please let us know.
                    We will try to provide you alternatives and also remove false info from website.
                    This will help others also.
                    <br/>
                    Shoot your update at : fightvscorona@gmail.com
                </Typography>

            </CardContent>

        </Card>
    </Container>
    )
}
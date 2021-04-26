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

export default function Contribute() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return  (
        <Container maxWidth="sm">

            <h4><Link href="/"><a>Back to home</a></Link></h4>

            <Card className={classes.root}>
                <CardContent>

                    <Typography variant="h5" component="h2">
                        You can help
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">

                    </Typography>
                    <Typography variant="body2" component="p">
                        If you have any information which you think is useful and world should know about it,
                        Please share with us. We try and publish only authentic sources.However it is really difficult job.
                        Hence please dont spam and waste everyone's precious time.
                    </Typography>
                    <Typography variant="body2" component="h4"  color="textSecondary">
                        <br/>
                        Get in touch with our team : fightvscorona@gmail.com
                    </Typography>

                </CardContent>

            </Card>
        </Container>
    )
}
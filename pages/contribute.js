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
                        <br/>
                        We know you may like to support covid relief effort. So we are trying to help you with details of relevant, impacted NGO. You can choose donate/volunteer on below given websites. We don't have any control or  interest with any parties. You can verify and select wisely. We do appreciate your feedback/observation.
                    </Typography>
                    <Typography >
                        <ul>
                            <a href="https://www.donatekart.com/Hemkunt-Foundation/Give-Oxygen-Cylinders/"><li>https://www.donatekart.com/Hemkunt-Foundation/Give-Oxygen-Cylinders/</li></a>
                            <a href="https://hemkuntfoundation.com/donate-now/"><li>https://hemkuntfoundation.com/donate-now/</li></a>
                            <a href="https://hemkuntfoundation.com/volunteer/"><li>Volunteer with NGO</li></a>
                        </ul>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <br/>
                        <br/>
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
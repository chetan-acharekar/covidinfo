import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from "@material-ui/core/Grid";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const infoList = [
        {
            url:"http://covidbedthane.in",
            title:"Hospitals in Thane",
            description:"Check beds availability, ventilators status in Thane"
        },
        {
            url:"http://covidpune.com",
            title:"Hospitals in Pune",
            description:"Check beds availability, ventilators status in Pune"
        },
        {
            url:"https://covidfightclub.org",
            title:"Check various covid resources status",
            description:"Check various covid resources status in various cities"
        },
        {
            url:"https://www.gethelpnow.in",
            title:"Get Ambulance",
            description:"Students and alumni of IIT Bombay and IIMs have started an initiative called HelpNow. HelpNow provides sanitized and well-equipped ambulances with ventilators, within 15 to 20 minutes across Mumbai, Pune, Delhi and Bengaluru.  24x7 network is available to patients, healthcare workers, hospitals, testing labs and Government bodies through the helpline number 88 99 88 99 52."
        },
        {
            url:"https://t.me/CovidMumbai",
            title:"Telegram Groups",
            description:"Citywise Telegram Public Group to share, seek and give info on Covid related matters. " +
                " Please join and take and give help in these difficult times" +
                "https://t.me/CovidAhmedabad\n" +
                "https://t.me/CovidBengaluru\n" +
                "https://t.me/covidbhopal\n" +
                "https://t.me/CovidChandigarh\n" +
                "https://t.me/CovidCoimbatore\n" +
                "https://t.me/CovidHyderabad\n" +
                "https://t.me/CovidIndore\n" +
                "https://t.me/CovidJaipur\n" +
                "https://t.me/CovidJodhpur\n" +
                "https://t.me/CovidKolkata\n" +
                "https://t.me/CovidLucknow \n" +
                "https://t.me/CovidMumbai\n" +
                "https://t.me/CovidNCR\n" +
                "https://t.me/CovidNagpur\n" +
                "https://t.me/CovidNashik\n" +
                "https://t.me/CovidPatna\n" +
                "https://t.me/CovidPune\n" +
                "https://t.me/CovidSurat\n" +
                "https://t.me/CovidUdaipur\n" +
                "https://t.me/CovidVaranasi "
        }]

    const items = []

    for (const [index, value] of infoList.entries()) {
        items.push(

            <Card className={classes.root}>
                <CardHeader title={value['title']}/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <a href="{value['url']}" className="card"><li>{value['url']}</li></a>
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography paragraph>
                        {value['description']}
                    </Typography>
                </CardContent>
            </Card>
        )
    }


    return (
    <div>
            <h6><Link href="/"><a>Back to home</a></Link></h6>
            <Grid container spacing={24}>

                {items}
            </Grid>
    </div>
    );
}
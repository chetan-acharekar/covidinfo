import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});



export default function SocialMedia() {
    const classes = useStyles();
    const rows = [{
        id:1,
        image:"/instagram.jpeg",
        title:"Gujraat Resources",
        details:"",
        url:"https://www.instagram.com/stvorg/guide/gujarat-covid-19-resources/17887002398146172/?igshid=19t71rz9zx0k8",
        urlTitle:"Instagram Link"
    },{
        id:2,
        image:"/twitter.jpeg",
        title:"Quick twitter search",
        details:"Apply various filters and get information quickly",
        url:"https://covid19-twitter.in/",
        urlTitle:"https://covid19-twitter.in/"
    },{
        id:3,
        image:"/instagram.jpeg",
        title:"Citywise resources",
        details:"Static data regarding Covid available, saved in city-wise highlights.",
        url:"https://www.instagram.com/alingaan/",
        urlTitle:"Instagram Link"
    },




        { id:4,
            image:"/twitter.jpeg",
            title:"Bhumi pednekar on twitter @bhumipednekar",
            details:"For all those reaching out for help please send in this format :\n" +
                "Patient Name-\n" +
                "Age-\n" +
                "Gender-\n" +
                "Hospital (if admitted)-\n" +
                "Blood group -\n" +
                "Blood bank name (plasma)-\n" +
                "HRCT-\n" +
                "SP O2-\n" +
                "Requirement-\n" +
                "City-\n" +
                "Contact-\n" +
                "Other info-\n" +
                "This makes it quicker for us to help find resources.\n" +
                "#covidwarrior",
            url:"https://twitter.com/bhumipednekar",
            urlTitle:"Twitter account"
        },

        { id:5,
            details:"All whatsapp group Links at one Place",
            image:"/whatsapp.png",
            title:"Whatsapp ",
            url:"https://linktr.ee/covidsevaindia",
            urlTitle:"linktr.ee"
        },
         { id:6,
            image:"/twitter.jpeg",
            title:"Thread on oxygen resources",
            details:"",
            url:"https://twitter.com/FinWise3/status/1385466839124254720?s=08",
            urlTitle:"Thread"
        },
        { id:7,
            image:"/twitter.jpeg",
            title:"Oxygen Leads in Haryana",
            details:"District wise Nodal officers for oxygen supply in Haryana ",
            url:"https://twitter.com/ipspankajnain/status/1386715297416052737/photo/1",
            urlTitle:"Link"
        },


        { id:8,
            image:"/plasma-dombivli.jpeg",
            title:"plasma-Dombivli",
            details:"RSS group helpline for plasma related stuff in dombivli"
        }, { id:9,
            url:"https://t.me/CovidMumbai",
            image:"/telegram.png",
            urlTitle:"Mumbai Telegram group",
            title:"Telegram Groups",
            details:"Citywise Telegram Public Group to share, seek and give info on Covid related matters. " +
                " Please join and take and give help in these difficult times. \n\n" +
                "\n https://t.me/CovidMumbai\n" +
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
        }

        ]

    const infoList = []

    for (const [index, value] of rows.entries()) {

        infoList.push(
            <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={value['image']}
                    title={value['title']}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {value['title']}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {value['details']}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href={value['url']} target="_blank" rel="noreferrer noopener">{value['urlTitle']}</a>
                </Button>
            </CardActions>
        </Card>
        )
    };

    return (
        <div>
            <h6><Link href="/"><a>Back to home</a></Link></h6>
            <Grid container spacing={24}>
                {infoList}
            </Grid>
        </div>
    );
}

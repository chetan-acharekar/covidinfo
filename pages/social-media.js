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
        image:"/plasma-dombivli.jpeg",
        title:"plasma-Dombivli",
        details:"RSS group helpline for plasma related stuff in dombivli"
    },
        {
            image:"",
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
        {image:"",
        title:"Thread on oxygen resources",
        details:"",
            url:"https://twitter.com/FinWise3/status/1385466839124254720?s=08",
            urlTitle:"Thread"}

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
                    <a href={value['url']}>{value['urlTitle']}</a>
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

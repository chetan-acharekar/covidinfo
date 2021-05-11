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

export default function UseFulLinks() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const infoList = [
        {
            id:1,
            url:"https://www.cowin.gov.in/home",
            title:"Official website",
            description:"Govt Of India's official website. Please register yourself and book slot asap",
            city:"India"
        },
        {
            id:2,
            url:"https://t.me/mumbaivaccinealerts",
            title:"Telegram Vaccine Groups",
            description:"https://t.me/blrvaccinealerts\n" +
                "\n" +
                "https://t.me/mumbaivaccinealerts\n" +
                "\n" +
                "https://t.me/punevaccinealerts https://t.me/calvaccinealerts\n" +
                "\n" +
                "https://t.me/hydvaccinealerts\n" +
                "\n" +
                "https://t.me/patnavaccinealerts\n" +
                "\n" +
                "https://t.me/delhivaccinealerts\n" +
                "https://t.me/ggnvaccinealerts\n" +
                "\n" +
                "https://t.me/varanasivaccinealerts\n" +
                "https://t.me/ghzvaccinealerts\n" +
                "\n" +
                "https://t.me/chennaivaccinealert",
            city:"India"
        },

        {
            id:3,
            url:"https://www.nmmchealthfacilities.com/HospitalInfo/showhospitalist",
            title:"Google Vaccine Groups",
            description:"https://groups.google.com/g/bom_vaccine_alerts\n" +
                "https://groups.google.com/g/pune_vaccine_alerts\n" +
                "\n" +
                "https://groups.google.com/g/cal_vaccine_alerts\n" +
                "\n" +
                "https://groups.google.com/g/hyd_vaccine_alerts\n" +
                " https://groups.google.com/g/pat_vaccine_alert\n" +
                "\n" +
                "https://groups.google.com/g/delhi_vaccine_alerts/\n" +
                " https://groups.google.com/g/ggn_vaccine_alert\n" +
                "\n" +
                "https://groups.google.com/g/gaziabad_vaccine_alert/\n" +
                "https://groups.google.com/g/hennai_vaccine_alert/",
            city:"India"
        },
        {
            id:4,
            url:"https://m.paytm.me/vaccineslotfinder",
            title:"Paytm",
            description:"Real time slot finder provided by paytm",
            city:"India"
        },
        {
            id:5,
            url:"https://getjab.in/",
            title:"https://getjab.in/",
            description:"Email notification when slot is available",
            city:"India"
        }


        ]

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'city', headerName: 'City', width: 200 },
        { field: 'url', headerName: 'Link', width: 400,
            renderCell: ( param) => (
                <a href={param.value} target="_blank" rel="noreferrer noopener">{param.value}</a>
            ) },
        { field: 'description', headerName: 'Details', width: 800 },

    ];

    const items = []

    for (const [index, value] of infoList.entries()) {
        items.push(

            <Card className={classes.root}>
                <CardHeader title={value['title']}/>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <a href={value['url']} className="card" target="_blank" rel="noreferrer noopener"><li>{value['url']}</li></a>
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
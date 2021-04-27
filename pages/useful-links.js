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
            url:"https://covidrelief.glideapp.io/",
            title:"Covid resources",
            description:"Covid resources app working simply on google sheet"
        },
        {
            url:"https://dhoondh.com/",
            title:"Plasma search",
            description:"Donate plasma or check availability for your loved ones"
        },
        {
            url:"https://plasmaline.in/",
            title:"Plasma search",
            description:"Donate plasma or check availability for your loved ones"
        },
        {
            description:"Standard guidelines, experts opinions",
            url:"https://www.notion.so/Blumiers-Covid-19-Resource-Guide-2021-d1b93d2c4d5449128e57d1fa3532ec03",
            title:"Blumiers-Covid-19-Resource"
        },
        {
            url:"https://t.me/CovidMumbai",
            title:"Telegram Groups",
            description:"Citywise Telegram Public Group to share, seek and give info on Covid related matters. " +
                " Please join and take and give help in these difficult times. \n" +
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
        },
        {
            url:"",
            title:"Medical resources in Delhi",
            description:
                "Helping charitable trust  : 9999085058 new delhi \n" +
                ", Vatality Equipment supplier : 9818771716 new delhi \n " +
                ", Medicare international : 9810844665 new delhi\n" +
                ", Oxygen lead : Mayapuri,B 133 indust.Area Phn..9891139441\n" +
                ", Oxygen lead :  9650804044 gurgaon\n" +
                ", Hukum chand & sons : 01124372745\n" +
                "\n" +
                "Avs surgical oxygen new delhi: 9899620996\n" +
                "\n" +
                "Sewa bharti Diagnostic centre- vadhera bhawan, ashok vihar, delhi 9319094933,011-43524996\n" +
                "\n" +
                "Jamiyat youth club, ulma-e-hind, bahadurashah zafar marg new delhi- 9971628838,7016057908\n" +
                "\n" +
                "Jay EMM gases- home cylinder for home quarantine,delhi 9310031095 \n" +
                "\n" +
                "Anil oxygen 9810520580,9899991758.\n" +
                "ND\n" +
                "Swaab samaj-  oxygen service,food- 9818936934,9971265674\n" +
                "\n" +
                "Marwari yuva march- noida,oxygen bank  oxygen cylinder available - noida \n" +
                "9211162600,9953545358,9911092813.\n" +
                "\n" +
                "Phatak Habash khan,Food, oxygen rifil delhi- 9810888857 \n" +
                "\n" +
                "Gali Qasim jaan,Lal kuan,garan road delhi-\n" +
                "Humayun, siraj 9811136674,9871421342\n" +
                "oxygen rifil\n" +
                "\n" +
                "Kisan ganj,islam ganj,sheesh mahal-ND\n" +
                "faeem,Ateeq- 7838572759,9873423252\n" +
                " oxygen rifil\n" +
                "\n" +
                "Ballimaran-delhi\n" +
                "anas ibrahim,faraz chamri wale- 7982191004,9899037929\n" +
                " oxygen rifil\n" +
                "\n" +
                "Nawaw Ganj,Naya mohalla Pul Bangash- sufiyan, ismail box-9310559924,9971200546\n" +
                " oxygen rifil\n" +
                "\n" +
                "Bara hindu rao, Beri wala bag- Delhi\n" +
                "Uzair Ahmed, md usmaan- 9999896460,9560887266\n" +
                " oxygen rifil\n" +
                "\n" +
                "Okhla-Batla house chauk,neta ji shariq husain United Against Hate-9990431468\n" +
                " oxygen rifil\n" +
                "\n" +
                "Okhla- Ayaaz, shariq peetal wale, Anas tihar batla- 9891541476,9811656382,9873112797\n" +
                "New friends colony- jawad ur rehman chairman- 7292072776\n" +
                " oxygen rifil\n" +
                "\n" +
                "Hauz rani- new delhi\n" +
                "Farooq siddique,\n" +
                "emergency oxygen and cylinder- 9999869483\n" +
                "\n" +
                "Mustfabaad- delhi, Mohd waasil- 9312950509\n" +
                " emergency oxygen and cylinder\n" +
                "\n" +
                "Azad Market Mohd shariq- 9899435380\n" +
                " emergency oxygen and cylinder\n" +
                "\n" +
                "Ajmeri gate Mohammad Taqi-9811160019\n" +
                " emergency oxygen and cylinder\n" +
                "\n" +
                "Khucha Chellan Mohd suhail- 9810376335\n" +
                " emergency oxygen and cylinder\n" +
                "\n" +
                "Kalan Mahal  Jawed Akhter- 9818333501\n" +
                " emergency oxygen and cylinder\n" +
                "\n" +
                "Turkman Gate, Mohd Farmaan- 9811623880\n" +
                " emergency oxygen and cylinder\n" +
                "\n" +
                "Dariyaganj delhi, Farman sahab- 9811623860\n" +
                "\n" +
                "Talent Ngo, Turkman gate, Irshad Ahmed- 9810221954,9313483314\n" +
                " oxygen and Equipments\n" +
                "\n" +
                "Shakoor ki bandi, Mohd Anas- 8750205734\n" +
                " emergency oxygen and cylinder\n" +
                "\n" +
                "Tihara Bairam khan, syed abrar ali-  9999690269\n" +
                " oxygen refil\n" +
                "\n" +
                "Chandni chowk,Bag wali masjid,Tayyab Ehsan- 9810235786\n" +
                " oxygen refil\n" +
                "\n" +
                "Wazirabaad delhi,28 futa road, near Jama masjid, Gali-9,Mohd salim\n" +
                " oxygen refil\n" +
                "\n" +
                "Rohini sec-8,C-7/236 Mr.Yash--9811868466\n" +
                " oxygen refil\n" +
                "\n" +
                "Rohini sec-11,H3/5,6 Mr. Anjani kumar--8950276817\n" +
                " oxygen refil\n" +
                "\n" +
                "Arvind jain,Oxygen silender and oxygen- all delhi\n" +
                "9315686858"
        },]

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
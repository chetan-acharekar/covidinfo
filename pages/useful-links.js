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
            url:"https://docs.google.com/spreadsheets/d/10dnssljiBoCE7Ni9UGpEGcWiBn0z_8vBARHAkoU8HJg/edit#gid=0",
            description:"Contact details for few hospitals in pune Area ",
            title:"Hospitals in Pune",
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
            description:"City wise resources status ",
            title:"Sprinklr Dashboard",
            url:"https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/5?id=DASHBOARD_601b9e214c7a6b689d76f493&home=1"
        },


        {
            description:"Covid relief resources like hospital beds, oxygen, remdesivir, etc. aggregated from multiple sources ",
            title:"Data aggregator for medical resources",
            url:"https://covidtools.in"
        },
        {
            description:"Powered by 200+ selfless volunteers to provide verified covid resources across India. ",
            title:"Data with last verification Dates ",
            url:"https://indiacovidresources.in/"
        },
        {
            description:"List of all help providers which we are verified on a regular basis ",
            title:"Data with last verification Dates ",
            url:"https://covidsos.org/"
        },
        {
            description:"Data for Oxygen,Bed,Blood Plasma,Remdesivir/Tocilizumab,Fabiflu across nation  ",
            title:"All medical resources list statewise ",
            url:"https://www.covidindiahelp.info/"
        },
        {
            description:"Scroll down at home page, they added section for Covid resources  ",
            title:" Medical resources ",
            url:"https://workimmune.com/"
        },

        {
            description:"Quick chat to find resources ",
            title:" Covid Chat bot ",
            url:"https://www.covidsos.live/app/index.html"
        },

        {
            description:"Data aggregator for all covid resources",
            title:" Search for resources ",
            url:"https://covidkhoj.in/"
        },
        {
            description:"This is a list of exhaustible resources for Covid-19.",
            title:" Search for resources ",
            url:"https://covidresources.netlify.app/"
        },
        {
            description:"Find Hospitals on Map",
            title:" Search for hospitals ",
            url:"https://covid-19-hospital-data.el.r.appspot.com/?location=Delhi&onlyGreen=true"
        },
        {
            description:"All information but limited to banglore region",
            title:" Banglore ",
            url:"https://covidhelplinebangalore.com/"
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
                "   * Helping charitable trust: +919999085058 new Delhi. " +
                "   * Vatality Equipment supplier : +919818771716 new Delhi. " +
                "   * Medicare international : +919810844665 new Delhi." +
                "   * Oxygen lead : Mayapuri,B 133 indust.Area Phn +919891139441." +
                "   * Oxygen lead :  +919650804044 gurgaon. " +
                "   * Hukum chand & sons : 01124372745." +
                "   * Avs surgical oxygen new delhi: +919899620996. " +
                "   * Sewa bharti Diagnostic centre- vadhera bhawan, ashok vihar, Delhi +919319094933,011-43524996." +
                "   * Jamiyat youth club, ulma-e-hind, bahadurashah zafar marg new delhi- +919971628838,+917016057908." +
                "   * Jay EMM gases- home cylinder for home quarantine,delhi +919310031095. " +
                "   * Anil oxygen +919810520580,+919899991758." +
                "   * Swaab samaj-  oxygen service,food- +919818936934,+919971265674. " +
                "   * Marwari yuva march- noida,oxygen bank  oxygen cylinder available - Noida. +919211162600,+919953545358,+919911092813." +
                "   * Phatak Habash khan,Food, oxygen rifil delhi- +919810888857." +
                "   * Gali Qasim jaan,Lal kuan,garan road Delhi-" +
                "   * Humayun, siraj +919811136674,+919871421342." +
                "   * oxygen rifil Kisan ganj,islam ganj,sheesh mahal-ND faeem,Ateeq- +917838572759,+919873423252. " +
                "   * oxygen rifil Ballimaran-delhi anas ibrahim,faraz chamri wale- +917982191004,+919899037929. " +
                "   * oxygen rifil Nawaw Ganj,Naya mohalla Pul Bangash- sufiyan, ismail box-+919310559924,+919971200546. " +
                "   * oxygen rifil Bara hindu rao, Beri wala bag- Delhi. Uzair Ahmed, md usmaan- +919999896460,+919560887266." +
                "   * oxygen rifil Okhla-Batla house chauk,neta ji shariq husain United Against Hate-+919990431468." +
                "   * oxygen rifil Okhla- Ayaaz, shariq peetal wale, Anas tihar batla- +919891541476,+919811656382,+919873112797." +
                "   * New friends colony- jawad ur rehman chairman- +917292072776." +
                "   * oxygen rifil Hauz rani- new delhi Farooq siddique, emergency oxygen and cylinder- +919999869483." +
                "   * Mustfabaad- delhi, Mohd waasil- +919312950509" +
                "   * emergency oxygen and cylinder Azad Market Mohd shariq- +919899435380." +
                " * emergency oxygen and cylinder Ajmeri gate Mohammad Taqi-+919811160019." +
                " * emergency oxygen and cylinder Khucha Chellan Mohd suhail- +919810376335." +
                " * emergency oxygen and cylinder Kalan Mahal  Jawed Akhter- +919818333501." +
                " * emergency oxygen and cylinder Turkman Gate, Mohd Farmaan- +919811623880." +
                " * emergency oxygen and cylinder Dariyaganj delhi, Farman sahab- +919811623860." +
                " * Talent Ngo, Turkman gate, Irshad Ahmed- +919810221954,+919313483314." +
                " * oxygen and Equipments Shakoor ki bandi, Mohd Anas- +918750205734." +
                " * emergency oxygen and cylinder Tihara Bairam khan, syed abrar ali-  +919999690269." +
                " * oxygen refil Chandni chowk,Bag wali masjid,Tayyab Ehsan- +919810235786." +
                " * oxygen refil Wazirabaad delhi,28 futa road, near Jama masjid, Gali-9,Mohd salim." +
                " * oxygen refil Rohini sec-8,C-7/236 Mr.Yash--+919811868466." +
                " * oxygen refil Rohini sec-11,H3/5,6 Mr. Anjani kumar--+918950276817." +
                " * oxygen refil  Arvind jain,Oxygen silender and oxygen- all delhi +91931568685."
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
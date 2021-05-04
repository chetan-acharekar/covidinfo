import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Link from "next/link";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'link', headerName: 'Link', width: 400,
        renderCell: ( param) => (
            <a href={param.value} target="_blank" rel="noreferrer noopener">{param.value}</a>
        ) },

];

const rows = [
    { id: 1, link: 'https://dhoondh.com/'},
    { id: 2, link: 'https://plasmaline.in/' },
    { id: 3, link: 'https://www.plasmaforyou.org/' },
    { id: 4, link: 'http://friends2support.org/'},
    { id: 5, link: 'https://pintnetwork.com/home' },
    { id: 6, link: 'https://needplasma.in/' },
    { id: 7, link: 'https://plasmadonor.in/'},
    { id: 8, link: 'https://givered.in/' },
    { id: 9, link: 'https://www.teamsosindia.in/' },
    { id:10,  link:'https://plasmadatabase.glideapp.io/'},
    {id:11,link:'https://coronaclusters.in/plasma'}
];




export default function DataGridDemo() {
    return (
        <>
            <h4><Link href="/"><a>Back to home</a></Link></h4>
            <br/>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5}  />
            </div>
            <br/>
            <p>
                THIS IS TO INFORM EVERYONE THAT WE ARE GROUP OF PEOPLE WHO ARE INCLINED TO DO SOME GOOD WORK TOWARDS THE SOCIETY WELFARE.WE ARE DOING THIS WORK CONSIDERING OUR ISR (INDIVIDUAL SOCIAL RESPONSIBILITY).
                WE ARE NOT INTO ANY MEDICAL SERVICES SUCH LIKE TESTING, PLASMA TRANSFUSION OR ETC.
                WE NEITHER ENGAGE OURSELVES INTO ANY MONETARY BENEFITS NOR WE PROMOTE SUCH WRONG DOINGS.
                YOU ARE REQUIRED TO ACCEPT THAT BY ENTERING INTO THIS WEBSITE, YOU WILL NOT ENGAGE INTO SUCH ACTIVITIES.
                WE AT fightvscorona.in WILL NOT BE LIABLE FOR ANY KIND OF DAMAGES DUE TO PLASMA DONATION.
                IF YOU ACCEPT TO THE ABOVE MENTIONED CONDITIONS THEN YOU ENTER TO THE WEBSITE.
            </p>
        </>
    );
}

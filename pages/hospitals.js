import Link from "next/link";

export default function Hospitals() {
    return  (
        <div className="container">
            <h1>Check status </h1>
            <ul>
                <a href="http://covidbedthane.in" className="card"><li>covidbedthane.in</li></a>
                <a href="http://covidpune.com" className="card"><li>covidpune.com</li></a>
            </ul>
            <h4><Link href="/"><a>Back to home</a></Link></h4>
        </div>
    )
}
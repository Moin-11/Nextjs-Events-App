import IDummyEvent from "../interfaces/IDummyEvent";
import Link from "next/link"
import styles from './event-item.module.css'


function EventItem (items) {

    const {title, image, date, location, id} = items;

    const PrettyDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year : 'numeric'
    })


const FormattedAddress =  location.replace(',', '\n');
const exploreLink =  `/events/${id}`;


return (<li className = {styles.item}>
    
    <img src = {image} alt = {title}>

</img>
<div className = {styles.content}>
<div className = {styles.summary}>

    <h2>TITLE</h2>

<div className = {styles.date}>
<time>
DATE
</time>
</div>
</div>
<div className = {styles.address}>
    <address>
ADDRESS
    </address>
</div>
</div>

<Link href = {exploreLink} >Explore Event</Link>

</li>)

}

export default EventItem;
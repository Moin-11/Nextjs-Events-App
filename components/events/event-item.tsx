import IDummyEvent from "../../interfaces/IDummyEvent";
import styles from './event-item.module.css'
import Button from "../button/button";
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

function EventItem (items) {

    const {title, image, date, location, id} : {title: string, image: string, date: string | Date, location: string, id:number} = items;

    const PrettyDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year : 'numeric'
    })


const FormattedAddress =  location.replace(',', '\n');
const exploreLink =  `/events/${id}`;


return ( <li className={styles.item}>
    <img src={'/' + image} alt={title} />
    <div className={styles.content}>
      <div className={styles.summary}>
        <h2>{title}</h2>
        <div className={styles.date}>
          <DateIcon />
          <time>{PrettyDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{FormattedAddress}</address>
        </div>
      </div>
      <div className={styles.actions}>
        <Button link={exploreLink}>
          <span>Explore Event</span>
          <span className={styles.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </div>
  </li>)

}

export default EventItem;
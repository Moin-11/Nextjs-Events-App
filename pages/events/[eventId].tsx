import {useRouter} from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../dummydata';
import EventSummary from "../../components/event-detail/event-summary"
import EventContent from "../../components/event-detail/event-content"
import EventLogistics from "../../components/event-detail/event-logistics"
import IDummyEvent from "../../interfaces/IDummyEvent"


function EventDetails() : React.ReactNode {
const router = useRouter();

const eventId = router.query.eventId;

const event = getEventById(eventId);


    return (
    <Fragment>
<EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>

    </Fragment>
    
    
    
    )
    
    }
    
    export default EventDetails;
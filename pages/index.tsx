import type { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../components/events/event-list';
import EventsSearch from '../components/events/events-search';
import {getFeaturedEvents} from "../dummydata";
import Event from "../interfaces/Event"

const Home: NextPage = () => {
  const router : NextRouter = useRouter();

  const featuredEvents : Event[] = getFeaturedEvents();
  
  function findEventsHandler(year : string | number, month : string | number) : void {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }
  return (
<Fragment>
  <EventsSearch onSearch={findEventsHandler} />
<EventList items = {featuredEvents}/>

</Fragment>
  )
}

export default Home

import type { NextPage } from 'next'
import EventList from '../components/events/event-list';
import {getFeaturedEvents} from "../dummydata";
import IDummyEvent from "../interfaces/Event"

const Home: NextPage = () => {
  
  const featuredEvents : IDummyEvent[] = getFeaturedEvents();
  
  
  return (
<div>
<EventList items = {featuredEvents}/>

</div>
  )
}

export default Home

import { Fragment } from 'react';
import { NextRouter, useRouter } from 'next/router';

import { getAllEvents } from '../../dummydata';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage() {
  const router : NextRouter = useRouter();
  const events  = getAllEvents();

  function findEventsHandler(year : string | number, month : string | number) : void {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
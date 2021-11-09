import {NextRouter, useRouter} from "next/router"
import { Fragment } from "react";
import Button from "../../components/button/button";
import ErrorAlert from "../../components/error-alert/error-alert";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/result-title";
import { getFilteredEvents } from "../../dummydata";


function FilteredEventsPage(){

const router : NextRouter = useRouter();

const queries = router.query.slug;

if(!queries){

    return <p className="center">Loading.....</p>
}



const queryYear : number = parseInt(queries[0]);
const queryMonth : number = parseInt(queries[1]);

if (
  isNaN(queryYear) ||
  isNaN(queryMonth) ||
  queryYear > 2030 ||
  queryYear < 2021 ||
  queryMonth < 1 ||
  queryMonth > 12
) {
  return (
    <Fragment>
      <ErrorAlert>
        <p>Invalid filter. Please adjust your values!</p>
      </ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show All Events</Button>
      </div>
    </Fragment>
  );
}

const filteredEvents = getFilteredEvents({
  year: queryYear,
  month: queryMonth,
});

if (!filteredEvents || filteredEvents.length === 0) {
  return (
    <Fragment>
      <ErrorAlert>
        <p>No events found for the chosen filter!</p>
      </ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show All Events</Button>
      </div>
    </Fragment>
  );
}

const date = new Date(queryYear, queryMonth - 1);

return (
  <Fragment>
    <ResultsTitle date={date} />
    <EventList items={filteredEvents} />
  </Fragment>
);
}

export default FilteredEventsPage;
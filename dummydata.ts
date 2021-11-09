import IDummyEvent from "./interfaces/IDummyEvent";

const DummyEvents : IDummyEvent[] = [

    {
        id: 'e1',
        title: 'Programming for everyone',
        description:
          'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/coding-event.jpg',
        isFeatured: false,
      },
      {
        id: 'e2',
        title: 'Networking for introverts',
        description:
          "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2021-05-30',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
      },
      {
        id: 'e3',
        title: 'Networking for extroverts',
        description:
          'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'My Street 12, 10115 Broke City',
        date: '2022-04-10',
        image: 'images/extrovert-event.jpg',
        isFeatured: true,
      },

];

export const getAllEvents  = () : IDummyEvent[] => {

return DummyEvents;

}

export const getFeaturedEvents = () : IDummyEvent[] => {

return DummyEvents.filter((event: IDummyEvent) => event.isFeatured);

}
    
export const getFilteredEvents = (datefilter : any) : IDummyEvent[] => {
 
    const {year, month} = datefilter;

let filteredEvents: IDummyEvent[] = DummyEvents.filter((event: IDummyEvent) => {

const eventDate = new Date(event.date);
return eventDate.getFullYear() === year && eventDate.getMonth() - 1;


}


)
return filteredEvents;

}

export function getEventById(id) {
  return DummyEvents.find((event) => event.id === id);
}



export default DummyEvents;
interface Event {

    id?: string,
    title?: string,
    description?: string,
    location?: string,
    date?: string | Date,
    image?: string,
    isFeatured?: boolean,
    imageAlt ?: string
    
    }

export default Event
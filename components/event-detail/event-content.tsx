import classes from './event-content.module.css';

function EventContent(props) : JSX.Element {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;

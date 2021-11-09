
import Button from '../button/button';
import classes from './result-title.module.css';

function ResultsTitle(props) : JSX.Element{
  const { date } : {date: Date | string} = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const classes = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
// initializes the Recap Card
export default function RecapCard(props) {
  //destructures props
  const {dayNumber, description, duration, date, repo} = props

  let hours = Math.floor(duration / 60)
  let minutes = duration - hours*60
  let pluralHours=""
  let pluralMinutes=""
  if (hours>1){
    pluralHours="s"
  }
  if (minutes>1){
    pluralMinutes="s"
  }
  //returns the recapCard for each day of the challenge
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {new Date(date).toDateString()}
        </Typography>
        <Typography variant="h5" component="h2">
          Day {dayNumber}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {hours + " hour" + pluralHours + " " + minutes + " minute" + pluralMinutes}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href={repo} target="_blank" rel="noreferrer">See Repository</a></Button>
      </CardActions>
    </Card>
  );
}

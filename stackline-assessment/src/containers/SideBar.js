import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Icon } from 'antd';
import Details from './Details'


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function SideBar(props) {
  const classes = useStyles();

  const nutribullet = props.nutribullet

  return (
  <div>
    <Card  className={classes.card} style={{}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={nutribullet.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nutribullet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {nutribullet.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Card>
        <Details tags = {nutribullet.tags} />
      </Card>
      <Card>
        <Button color="primary" className={classes.button}>
          <div><Icon type="home"/>  OVERVIEW </div>
        </Button>
        <Button onClick={props.handleClick}color="primary" className={classes.button}>
          <div><Icon type="bar-chart" />  SALES </div>
        </Button>
      </Card>
    </Card>

  </div>
  );
}

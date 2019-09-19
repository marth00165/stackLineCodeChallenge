import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function Details(props) {

  const classes = useStyles();

  const tags = props.tags

  const myButtons = tags.map(p => (
  <Button style = {{width:"10px", fontSize:"10px"}} variant="outlined" className={classes.button} key={tags.indexOf(p)}>
    {p}
  </Button>
));





  return (
    <div>
    {myButtons}
    </div>

  );
}

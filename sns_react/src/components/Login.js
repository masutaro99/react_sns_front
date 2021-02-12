import React, {useReducer} from 'react';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  span: {
    color: 'teal',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  spanError: {
    color: 'fuchsia',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margintop: 10,
  },
}));


const Login = () => {
  const classes = useStyles();
  return (
    <div>
      <h3>login</h3>
    </div>
  )
}

export default Login

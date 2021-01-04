import { makeStyles } from '@material-ui/core/styles';
const useActionStyles = makeStyles({
  root: {
    padding: '3px 15px',
  },
});
const useAddNewStyles = makeStyles({
  root: {
    padding: '3px 20px',
    margin: '0 auto',
    display: 'block',
    color: 'white'
  },
});
const yesStyles = makeStyles({
  root: {
    width: '100px',
    height: '40px',
    display: 'block',
    color: 'white',
    backgroundColor: 'red'
  },
});


export {useActionStyles, useAddNewStyles, yesStyles}
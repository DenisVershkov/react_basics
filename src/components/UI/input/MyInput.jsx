import classes from './MyInput.module.css';

const MyInput = (props) => {
  return <input type="text" className={classes.myInput} {...props} />;
};

export default MyInput;

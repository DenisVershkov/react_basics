import classes from './myModal.module.css'


const MyModal = ({children, visible, setVisible}) => {
  const rootClasses = [classes.myModal]
  if(visible) {
    rootClasses.push(classes.active)
  }

  return (
    <div onClick={(e) => setVisible(false)} className={rootClasses.join(' ')}>
    <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
    {children}
    </div>
    </div>
  )
}

export default MyModal

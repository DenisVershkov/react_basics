import classes from './Loader.module.css'

function Loader() {
    return (
        <div className="d-flex justify-content-center">
            <div className={classes.ldsripple}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './SignIn.module.scss'

const cx = classNames.bind(styles)

function SignIn() {
    return ( 
   <div className={cx('wrapper')}>
        <div className={cx('logo')} >
                <div className={cx('logo-violet')}></div>
                <div className={cx('logo-pink')}></div>
        </div>
        <div className={cx('inner')}>
            <div className={cx('title')}>Sign In</div>
            <div className={cx('name')}>Username</div>
            <input/>
            <Link to="/me/home" className={cx('btn')}>Sign In</Link>
        </div>
   </div>
    );
}

export default SignIn;
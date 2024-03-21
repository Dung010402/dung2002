import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import classNames from 'classnames/bind'

import styles from './Home.module.scss'

import image1 from '../../images/image1 1.png'
import image2 from '../../images/image3 1.png'
import image3 from '../../images/image4.png'
import image4 from '../../images/image5 1.png'
import image5 from '../../images/image6 1.png'
import image6 from '../../images/Ellipse 76.png'
import { faCommentSms } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)


const about = [
                {   id:'1',
                    name:'Profile'},
                {   id:'2',
                    name:'Features'},
                {   id:'3',
                    name:'Careers'},
                {   id:'4',
                    name:'DW News'}, 
            ]
const help = ['Support', 'Sign up', 'Guide','Reports','Q&A']

function MeHome() {
    return ( <div className={cx("wrapper" )}>
        <div className={cx('header')} >
          <div className={cx('header-nav')}>
                <div className={cx('logo')} >
                   <div className={cx('logo-violet')}></div>
                    <div className={cx('logo-pink')}></div>
                </div>
                <div className={cx('nav-btn')} >
                    <Link className={cx('btn-sign-in')} to="/me/profile">Profile</Link>
                    <Link className={cx('btn-sign-in')} to="/dung2002">Logout</Link>
                </div>
            </div>
            <div className={cx('header-description')}>
                <div className={cx('description')}>
                   <div className={cx('description-name')}>Save your data storage here.</div>
                    <div className={cx('description-text')}>
                        Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.
                    </div>
                    <button className={cx('btn-description')}>
                        <p>Learn more</p>
                    </button>
                </div>
                <img className={cx('description-image')} src={image1} alt=''/>
            </div>  
        </div>
        <div className={cx('features')} >
          <div className={cx('features-title')}>
                <div>Features</div>
                <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
            </div>
            <div className={cx('wrapper-features')}>
                <div className={cx('features-group')}>
                    <img className={cx('group-img')} src={image2} alt='' />
                    <div className={cx('group')}>
                     <div className={cx('group-name')}>Search Data</div>
                        <div className={cx('group-desr')}>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</div>
                        <div className={cx('group-btn')}>
                        Learn more
                            <div className={cx('btn-next')}>
                                <div className={cx('next-s')}></div>
                                <div className={cx('vector-s')}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('features-group')}>
                    <img className={cx('group-img')} src={image3} alt='' />
                    {/* <div className={cx('ja')}>
    
                    </div> */}
                    <div className={cx('group')}>
                        <div className={cx('group-name')}>24 Hours Access</div>
                        <div className={cx('group-desr')}>Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.</div>
                        <div className={cx('group-btn')}>
                        Learn more
                            <div className={cx('btn-next')}>
                                <div className={cx('next-s')}></div>
                                <div className={cx('vector-s')}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('features-group')}>
                    <img className={cx('group-img')} src={image4} alt='' />
                    <div className={cx('group')} >
                       <div className={cx('group-name')}>Print Out</div>
                        <div className={cx('group-desr')}>Print out service gives you convenience if someday you need print data, just edit it all and just print it.</div>
                        <div className={cx('group-btn')}>
                        Learn more
                            <div className={cx('btn-next')}>
                                <div className={cx('next-s')}></div>
                                <div className={cx('vector-s')}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('features-group')}>
                    <img className={cx('group-img')} src={image5} alt='' />
                    <div className={cx('group')}>
                        <div className={cx('group-name')}>Security Code</div>
                        <div className={cx('group-desr')}>Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</div>
                        <div className={cx('group-btn')}>
                        Learn more
                            <div className={cx('btn-next')}>
                                <div className={cx('next-s')}></div>
                                <div className={cx('vector-s')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={cx('testimonials')} >
           <div className={cx('testimonials-title')}>Testimonials</div>
            <div className={cx('testimonials-group')}>
                <div className={cx('testimonials-person')}>
                    <img className={cx('testimonials-image')} src={image6} alt=''/>
                    <div className={cx('testimonials-wrapper')}>
                        <div className={cx('testimonials-name')}>John Fang</div>
                        <div className={cx('testimonials-path')}>wordfaang.com</div>
                        <div className={cx('testimonials-desr')}>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</div>
                    </div>
                </div>
            </div>
            <div className={cx('testimonials-next')}>
                <div className={cx('next')}></div>
                <div className={cx('vector')}></div>
            </div>
            <div className={cx('testimonials-prev')}>
                <div className={cx('prev')}></div>
                <div className={cx('vector')}></div>
            </div>
            <div className={cx('slide')}>
                <div className={cx('slide-item')}></div>
                <div className={cx('slide-item')}></div>
                <div className={cx('slide-item')}></div>
                <div className={cx('slide-item')}></div>
            </div>
        </div>
        <div className={cx('footer')}>
            <div className={cx('info')}>
                <div className={cx('inner-logo')}>
                    <div className={cx('logo')}>
                        <div className={cx('logo-violet')}></div>
                        <div className={cx('logo-pink')}></div>
                    </div>
                    <div className={cx('info-name')}>DataWarehouse</div>
                </div>
                <div className={cx('info-address')}>Warehouse Society, 234 <br/> Bahagia Ave Street PRBW 29281</div>
                <div className={cx('info-mail')}>info@warehouse.project <br/>1-232-3434 (Main)</div>
            </div>
            <div className={cx('footer-list')}>
                <div className={cx('list-title')}>About</div>
                <div>{about.map((res)=>{
                    return (
                    <div className={cx('list-item')}>{res.name}</div>)
                    })}
                </div>
            </div>
            <div className={cx('footer-list')}>
                <div className={cx('list-title')}>Help</div>
                <div>{help.map((res)=>{
                    return (<div className={cx('list-item')}>{res}</div>)
                    })}
                </div>
            </div>
            <div className={cx('social')}>
                <div className={cx('social-title')}>Social Media</div>
              <div className={cx('social-list')}>
                    <div className={cx('social-item')}><FontAwesomeIcon className={cx('icon-facebook')} icon={faFacebook}/></div>
                    <div className={cx('social-item')}><FontAwesomeIcon className={cx('icon-instagram')} icon={faInstagram}/></div>
                    <div className={cx('social-item')}><FontAwesomeIcon className={cx('icon-twitter')} icon={faTwitter}/></div>
              </div>
            </div>
            <div className={cx('copy-right')}>© Datawarehouse™, 2020. All rights reserved.<br/>Company Registration Number: 21479524.</div>
            <div className={cx('chat')}><FontAwesomeIcon icon={faCommentSms} className={cx('icon-messenger')}/></div>
        </div>
    </div> );
}

export default MeHome;
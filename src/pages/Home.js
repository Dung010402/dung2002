import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"

import './Home.css'
import image1 from '../images/image1 1.png'
import image2 from '../images/image3 1.png'
import image3 from '../images/image4.png'
import image4 from '../images/image5 1.png'
import image5 from '../images/image6 1.png'
import image6 from '../images/Ellipse 76.png'
import { faCommentSms } from '@fortawesome/free-solid-svg-icons'

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

function Home() {
    return ( <div className="wrapper" >
        <div className='header'>
            <div className='header-nav'>
                <div className='logo'>
                    <div className='logo-violet'></div>
                    <div className='logo-pink'></div>
                </div>
                <button className='btn-sign-in'>
                    <p>Sign In</p>
                </button>
            </div>
            <div className='header-description'>
                <div className='description'>
                    <div className='description-name'>Save your data storage here.</div>
                    <div className='description-text'>
                        Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.
                    </div>
                    <button className='btn-description'>
                        <p>Learn more</p>
                    </button>
                </div>
                <img className='description-image' src={image1} alt=''/>
            </div>  
        </div>
        <div className='features'>
            <div className='features-title'>
                <div>Features</div>
                <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
            </div>
            <div className='wrapper-features'>
                <div className='features-group'>
                    <img className='group-img' src={image2} alt='' />
                    {/* <div className='ja'>
    
                    </div> */}
                    <div className='group'>
                        <div className='group-name'>Search Data</div>
                        <div className='group-desr'>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</div>
                        <div className='group-btn'>
                        Learn more
                            <div className='btn-next'>
                                <div className='next-s'></div>
                                <div className='vector-s'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='features-group'>
                    <img className='group-img' src={image3} alt='' />
                    {/* <div className='ja'>
    
                    </div> */}
                    <div className='group'>
                        <div className='group-name'>24 Hours Access</div>
                        <div className='group-desr'>Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.</div>
                        <div className='group-btn'>
                        Learn more
                            <div className='btn-next'>
                                <div className='next-s'></div>
                                <div className='vector-s'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='features-group'>
                    <img className='group-img' src={image4} alt='' />
                    <div className='group'>
                        <div className='group-name'>Print Out</div>
                        <div className='group-desr'>Print out service gives you convenience if someday you need print data, just edit it all and just print it.</div>
                        <div className='group-btn'>
                        Learn more
                            <div className='btn-next'>
                                <div className='next-s'></div>
                                <div className='vector-s'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='features-group'>
                    <img className='group-img' src={image5} alt='' />
                    <div className='group'>
                        <div className='group-name'>Security Code</div>
                        <div className='group-desr'>Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</div>
                        <div className='group-btn'>
                        Learn more
                            <div className='btn-next'>
                                <div className='next-s'></div>
                                <div className='vector-s'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='testimonials'>
            <div className='testimonials-title'>Testimonials</div>
            <div className='testimonials-group'>
                <div className='testimonials-person'>
                    <img className='testimonials-image' src={image6} alt=''/>
                    <div className='testimonials-wrapper'>
                        <div className='testimonials-name'>John Fang</div>
                        <div className='testimonials-path'>wordfaang.com</div>
                        <div className='testimonials-desr'>Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</div>
                    </div>
                </div>
            </div>
            <div className='testimonials-next'>
                <div className='next'></div>
                <div className='vector'></div>
            </div>
            <div className='testimonials-prev'>
                <div className='prev'></div>
                <div className='vector'></div>
            </div>
            <div className='slide'>
                <div className='slide-item slide-active'></div>
                <div className='slide-item'></div>
                <div className='slide-item'></div>
                <div className='slide-item'></div>
            </div>
        </div>
        <div className='footer'>
            <div className='info'>
                <div className='inner-logo'>
                    <div className='logo'>
                        <div className='logo-violet'></div>
                        <div className='logo-pink'></div>
                    </div>
                    <div className='info-name'>DataWarehouse</div>
                </div>
                <div className='info-address'>Warehouse Society, 234 <br/> Bahagia Ave Street PRBW 29281</div>
                <div className='info-mail'>info@warehouse.project <br/>1-232-3434 (Main)</div>
            </div>
            <div className='footer-list'>
                <div className='list-title'>About</div>
                <div>{about.map((res)=>{
                    return (
                    <div className='list-item'>{res.name}</div>)
                    })}
                </div>
            </div>
            <div className='footer-list'>
                <div className='list-title'>Help</div>
                <div>{help.map((res)=>{
                    return (<div className='list-item'>{res}</div>)
                    })}
                </div>
            </div>
            <div className='social'>
                <div className='social-title'>Social Media</div>
              <div className='social-list'>
                    <div className='social-item'><FontAwesomeIcon className='icon-facebook' icon={faFacebook}/></div>
                    <div className='social-item'><FontAwesomeIcon className='icon-instagram' icon={faInstagram}/></div>
                    <div className='social-item'><FontAwesomeIcon className='icon-twitter' icon={faTwitter}/></div>
              </div>
            </div>
            <div className='copy-right'>© Datawarehouse™, 2020. All rights reserved.<br/>Company Registration Number: 21479524.</div>
            <div className='chat'><FontAwesomeIcon icon={faCommentSms} className='icon-messenger'/></div>
        </div>
    </div> );
}

export default Home;
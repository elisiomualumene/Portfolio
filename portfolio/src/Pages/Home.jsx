import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
import Style from './Style/Home.module.css'
import avatar from './man.png'


const Home = () => {
    return(
        <div className={Style.home}>
            <div className={Style.container}>
                <img src={avatar} alt="avatar"/>
                <h2>Elísio Mualumene</h2>
                <p>I'm a Web Development and UI UX Designer</p>
                <ul>
                    <li><a href="https://facebook.com/elisiomualumene1" target="_blank" rel='noreferrer'><FaFacebook/></a></li>

                    <li><a href="https://linkedin.com/in/elisiomualumene" target="_blank"  rel='noreferrer'><FaLinkedin/></a></li>

                    <li><a href="https://twitter.com/elisiomualumene" target="_blank"  rel='noreferrer'><FaTwitter/></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
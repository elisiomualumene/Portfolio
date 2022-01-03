import Style from './Style/Home.module.css'

const Home = () => {
    return(
        <div className={Style.home}>
            <div className={Style.container}>
                <img src="" alt="Avatar"/>
                <h2>Elísio Mualumene</h2>
                <p>I'm a Web Development and UI UX Designer</p>
                <div className="social_media">
                <img src="" alt="Facebook"/>
                <img src="" alt="Linkedin"/>
                <img src="" alt="Twitter"/>
                </div>
            </div>
        </div>
    );
}

export default Home;
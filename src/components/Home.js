import { Link } from 'react-router-dom';
import photo1 from './images/photo1.png'

const Home = () => {
    return (
        <div className="container">
            <section>
            <h1 className="title">Welcome to the world of competitive typing</h1>
            <p className="info">where hands fly across keyboards our typing speed
                game are tailored to your ability so you can learn 
                fast typing easily . so let the adventures game 
                begin for you. If you are already registered with us 
                just press the button.</p>
                
              
               <Link to= "/login">
                <button className='btn-1'>Login</button>
                </Link>
                <Link to= "/game">
                <button className='btn-1'>Game</button>
                </Link>
            
            </section>
            <section>
              <img src = {photo1} className='img' alt= "typing hands" />
            </section>
        </div>
    )
};
export default Home;
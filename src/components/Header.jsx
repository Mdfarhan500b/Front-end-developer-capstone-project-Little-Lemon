import { Link } from 'react-router-dom';
import Bannerimg from '../images/resturantfood.png'
function Header(){
 return(
    <div className="header">
        <section>
        <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/booking"><button aria-label= 'On Click' id="reseve-table-btn">Reserve Table</button></Link>
        </div>
        {/* banner image */}
        <div className='banner-img'>
        <img src= {Bannerimg} alt="" />
        </div>
        </section>
    </div>
 )
}

export default Header

import{Link}from"react-router";
import "./raw.css";




const Header=()=>{

return(
    <header>

<h1>Welcome to Our Website</h1>

<nav>
<Link to="/login">Login</Link>
<Link to= "/about">About</Link>

</nav>


    </header>
)
}

export default Header
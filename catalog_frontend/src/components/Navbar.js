import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="firstdiv" id="legoland">
        <Link to="/">
          <h1>LEGO LAND</h1>
          <h4>RED BRICK</h4>
        </Link>
      </div>
      <div className="firstdiv">
        <Link to="/toys">Toys</Link>
      </div>
      <div className="firstdiv">
        <Link to="/">Catalog</Link>
      </div>
      <div className="firstdiv">
        <Link to="/characers">Characters</Link>
      </div>
      <div className="firstdiv">
        <Link to="/brand">Brand</Link>
      </div>
      {/*  */}
      <div className="firstdiv">ENG</div>
      {/*  */}
      <div className="firstdiv">Alexander</div>
    </nav>
  )
}

export default Navbar

import "./Navbar.css"
function Navbar(){
    return(
          <>
        <div className="navbar">
            <div className="logo">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLWIywyKbO_02a2lYoZeY9ZAxsS_sJsUMaYPW832l20vth9RIe" width="30px" height="30px" /> &ensp;
                <h2>Geekfood</h2>

            </div>
            <div class="list">
                <ul>
                    <li>Home</li>
                    <li>Quote</li>
                    <li>Restuarnts</li>
                    <li>Food</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="btn">
                <button>Get Started</button>
            </div>
            

        </div>
        <br />
        <br />
        <hr />
          </>
    );
}

export default Navbar
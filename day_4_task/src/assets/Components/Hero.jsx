import "./Hero.css"

var card ={
    width:"1200px",
    padding:"30px",
    margin:"30px",
    textAlign:"center",
    boxShadow:"0 0 1px black",
    margin:"100px",
    marginTop:"10px"
  }

  
function Hero(props){
    return(
          <div style={card}>
          <h2>{props.heading}</h2>
          <br />
          <p>{props.para}.</p>
          </div>
    );
}

export default Hero
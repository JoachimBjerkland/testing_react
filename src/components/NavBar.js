import { Link } from 'react-router-dom';

function NavBar() {
  
  const testIng = event => {
    
    const tebElements = document.querySelectorAll("nav li");
    tebElements.forEach((element) => {
        element.classList.replace("active", "inactive");
    });

    event.currentTarget.classList.add('active')
  }

  
  return (
      <>
        <Link to="/html"><li className="inactive" onClick={testIng}>HTML</li></Link>
        <Link to="/css" ><li className="inactive" onClick={testIng}>CSS</li></Link>
        <Link to="/javascript" ><li className="inactive" onClick={testIng}>JavaScript</li></Link>
        <Link to="/react" ><li className="inactive" onClick={testIng}>React</li></Link>
        <Link to="/sanity" ><li className="inactive" onClick={testIng}>Sanity</li></Link>
      </>
  );
}

export default NavBar;

import { Tooltip } from 'bootstrap';
import './CSS FILES/Map.css';
import { useNavigate } from 'react-router-dom';


function MyMarker  ({ text, tooltip, $hover})  {



    const handleClick = () => {
      console.log(`You clicked on ${tooltip}`);
      
    };
  
    return (
      <div className={$hover ? "circle hover" : "circle" }  >
        <span onClick={handleClick}  className="circleText" className2="tooltip" title={tooltip}>
        
        
        
        </span>
      </div>
    );
  };
  
export default MyMarker;
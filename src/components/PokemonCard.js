import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({names, hp, frontImgs, backImgs}) {

  const [imageState, setImageState] = useState(false)
  // console.log(backImgs)

  const swapImage = (e) => {
    setImageState(!imageState)
  }
 
  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={swapImage} src={imageState ? backImgs : frontImgs} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{names}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

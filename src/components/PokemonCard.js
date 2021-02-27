import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {

    const {name, hp, sprites} = poke
    const [sprite, setSprite] = useState("front")
  
    function cardFlip(){
      setSprite(sprite === "front" ? "back" : "front")
    }

  return (
    <Card onClick={cardFlip}>
      <div>
        <div className="image">
          <img src={sprites[sprite]} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
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

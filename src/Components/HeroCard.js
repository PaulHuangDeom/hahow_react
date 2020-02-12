import React from 'react';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const HeroCard = ({data, ...props}) => {
	let {heroId} = useParams();
  const {id, name, image} = data;
  return (
    <div className={heroId === id ? "hero_card active" : "hero_card"}>
      <Link to={`/heroes/${id}`} >
        <img src={image}/>
        <h4 className="hero_card_name">{name}</h4>
      </Link>
    </div>
  );
}

export default HeroCard;
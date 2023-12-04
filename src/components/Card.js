import React from "react";
import 'tachyons';

const Card = (props) => {
    const {id,name,email} = props;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"> {/* I am using tachyons library*/}
            <img src={`https://robohash.org/${id}?size=200x200`} alt="Card" />
            <div>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
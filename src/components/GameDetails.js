import React from "react";


export default function GameDetails (props) {
    return (
        <div>
            ID de mon jeu : {props.match.params.id}
        </div>
    )
}
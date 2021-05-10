import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Game from "./Game";

export default function GameList() {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        axios
            .get('https://wild-games.jsrover.wilders.dev/games')
            .then((response) => response.data)
            .then((data) => setGameList(data));
    }, [])

    return (
        <div>
            {gameList
                .map((el) => {
                    return (
                        <div>
                            <Game name={el.name} 
                            rating={el.rating}
                            img={el.background_image}/>
                        </div>
                    )
                })}
        </div>
    )
}

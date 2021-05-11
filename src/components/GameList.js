import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Game from "./Game";

export default function GameList() {
    const [gameList, setGameList] = useState([]);
    const [rating, setRating] = useState(false);

    useEffect(() => {
        axios
            .get('https://wild-games.jsrover.wilders.dev/games')
            .then((response) => response.data)
            .then((data) => setGameList(data));
    }, [])
    function handleOnClick() {
        setRating(!rating);
    }

    return (
        <div>
            {gameList
                .filter((el) => !rating || el.rating > 4.5)
                .map((el) => {
                    return (
                        <div>
                            <Game
                                name={el.name}
                                rating={el.rating}
                                img={el.background_image}
                                id={el.id}
                            />
                        </div>
                    )
                })}
            <button onClick={handleOnClick}>
                fitlre
                </button>
        </div>
    )
}
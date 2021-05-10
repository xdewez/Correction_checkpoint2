import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
                            <h3>{el.name}</h3>
                            <h4>{el.rating}</h4>
                        </div>
                    )
                })}
        </div>
    )
}

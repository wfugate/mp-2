

import styled from "styled-components";
import {useEffect, useState} from "react";
import {Movie} from "./interfaces/Movie.ts";
import TheMovieDB from "./components/TheMovieDB.tsx";

const StyledHeader = styled.h1`

    background-color: #0d1b2a;
    color: #eceff1;
    margin: 0;
    text-align: center;
    padding: 2vw;
    font-family: "Jost", sans-serif;
`;



export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Movie[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=d3931fa0f5369b7ba2bb2981001bb8f9&primary_release_year=2025");
            const {results} : {results: Movie[]} = await rawData.json();
            console.log(results);
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return (
        <div>
            <StyledHeader>Movies</StyledHeader>
            <TheMovieDB data={data} />
        </div>
    )

}


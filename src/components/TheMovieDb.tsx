import styled from "styled-components";
import {Movie} from "../interfaces/Movie.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #1b3a4b;
    width: 100%;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;
    max-width: 20%;
    padding: 2%;
    margin: 1%;
    background-color: #b0bec5;
    color: #0d1b2a;
    border: 3px #0d1b2a solid;
    font-family: "Jost", sans-serif;
    font-size: calc(14px + 0.2vw);
    text-align: center;
    @media screen and (max-width: 1000px) {
        max-width: 40%;
    }


    @media screen and (max-width: 600px) {
        max-width: 80%;
    }

`;

const StyledH1 = styled.h1`
    color: #eceff1;
`;

const StyledP = styled.p`
    color : #eceff1;
    margin: 0.5vw;
    padding: 0;
`;

export default function TheMovieDb (props : { data:Movie[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((movie: Movie) =>
                    <SingleCharDiv key={movie.id}>
                        <StyledH1>{movie.title}</StyledH1>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`image of ${movie.title}`} />
                        <StyledP>Overview: {movie.overview}</StyledP>
                        <StyledP>Release: {movie.release_date}</StyledP>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}



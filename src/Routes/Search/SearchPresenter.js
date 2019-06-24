import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";


const Container = styled.div`
   padding: 20px  20px;
 `;
const Form = styled.form`
   margin-bottom: 50px;
   width: 100%;
 `;
const Input = styled.input`
   all : unset;
   font-size: 23px;
   width: 100%;
 `;

const SearchPresenter = ({
   movieResults,
   tvResults,
   searchTerm,
   error,
   loading,
   handleSubmit,
   updateTerm,
}) => (
      <Container>
         <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV shows ..." value={searchTerm}
               onChange={updateTerm}
            ></Input>

         </Form>

         {loading ? (<Loader />) : (
            <>
               {movieResults && movieResults.length > 0 &&
                  (
                     <Section title="movie Result">
                        {movieResults.map(movie =>
                           (
                              <Poster
                                 key={movie.id}
                                 id={movie.id}
                                 imageUrl={movie.poster_path}
                                 title={movie.title}
                                 rating={movie.vote_average}
                                 year={movie.realese_data && movie.realese_data.substring(0, 4)}
                                 isMovie={true}

                              ></Poster>
                           )
                        )}
                     </Section>
                  )
               }
               {tvResults && tvResults.length > 0 &&
                  (
                     <Section title="tv Results ">
                        {tvResults.map(show =>
                           <Poster
                              key={show.id}
                              id={show.id}

                              imageUrl={show.poster_path}
                              title={show.original_name}
                              rating={show.vote_average}
                              year={show.first_air_date.substring(0, 4)}
                              isShow={true}
                           />
                        )}
                     </Section>
                  )
               }
               {error && <Message color="#e74c3c" text={error} />}
               {movieResults &&
                  movieResults.length === 0 &&
                  tvResults &&
                  tvResults.length === 0 && (
                     <Message color="#95a5a6" text={`Nothing found for : ${searchTerm}`} />
                  )}

            </>

         )}

      </Container>
   );


SearchPresenter.propTpyes = {
   movieResults: PropTypes.array,
   tvResults: PropTypes.array,
   upcoming: PropTypes.array,
   searchTerm: PropTypes.func.isRequired,
   updateTerm: PropTypes.func.isRequired,
   loading: PropTypes.bool.isRequired,
   error: PropTypes.string,
   handleSubmit: PropTypes.func.isRequired,



}

export default SearchPresenter;
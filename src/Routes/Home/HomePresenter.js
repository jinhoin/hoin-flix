import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from 'Components/Section'
import Loader from "Components/Loader"
import Message from "Components/Message"
import Poster from "Components/Poster"


const Container = styled.div`
  padding: 0px 10px;
  margin-bottom: 2px solid black;

`;

const HomePresenter = ({
  popular,
  nowPlaying,
  upComing,
  error,
  loading,

}) => loading ? (
  <Loader />
)

    : (
      <Container>
        {upComing && upComing.length > 0 &&
          <Section title="upComing Movie">
            {upComing.map(movie =>
              <Poster
                key={movie.id}
                id={movie.id}

                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            )}
          </Section>
        }

        {nowPlaying && nowPlaying.length > 0 &&
          <Section title="Now Playing">
            {nowPlaying.map(movie =>
              <Poster
                key={movie.id}
                id={movie.id}

                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            )}
          </Section>
        }
        {popular && popular.length > 0 &&
          <Section title="popular Movie">
            {popular.map(movie =>
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}

              />
            )}
          </Section>
        }
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    );


HomePresenter.propTpyes = {
  popular: PropTypes.array,
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string

}

export default HomePresenter;
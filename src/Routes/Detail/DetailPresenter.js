import React from "react";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import styled from "styled-components";
import Message from "Components/Message";


const Conatiner = styled.div`
    height : calc(100vh - 50px);
    width : 100%;
   position : relative;
    padding: 50px;

`;

const Backdrop = styled.div`
    position : absolute;
    top : 0;
    left: 0;
    width  : 100%;
    height : 100%;
    background-image : url(${props => props.bgImage});
    background-position : center center;
    background-size : cover;
    filter : blur(2px);
    opacity : 0.5;
    z-index : 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  z-index: 1;
  border-radius: 5px;
`;

const Data = styled.div`
    width : 70%;
    margin-left : 10px;


`;

const Title = styled.div`
    font-size : 32px;
    /* color : white; */
    margin-bottom : 10px;
`;
const ItemContainer = styled.div`
margin-bottom: 20px;
`;

const Item = styled.span`
    padding-right : 5px;
`;
const OverView = styled.p`
    font-size: 12px;
    opacity : 0.7;
    line-height: 1.5;
    width : 50%;
`;
const Divider = styled.span`
    margin : 0;
`;

const DetailPresenter = ({ result, error, loading }) =>
    loading ? (
        <Loader />
    ) : (
            <>
                {
                    <Conatiner>
                        <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
                        <Content>
                            <Cover
                                bgImage={
                                    result.poster_path
                                        ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                                        : require("../../assets/404.jpg")
                                }
                            />
                            <Data>
                                <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                                <ItemContainer>
                                    <Item>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Item>
                                    <Divider> * </Divider>
                                    <Item>{result.runtime ? result.runtime : result.episode_run_time[0]}</Item>
                                    <Item>{result.genres && result.genres.map((genres, index) => index === result.genres.length - 1
                                        ? `${genres.name}` : `${genres.name} /`)}
                                    </Item>
                                </ItemContainer>
                                <OverView>
                                    {result.overview ? result.overview : `${result.overview}를 못찾았습니다`}

                                </OverView>
                            </Data>
                        </Content>


                    </Conatiner >

                }
                {error && <Message color="#e74c3c" text={error} />}
            </>
        );




DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
}

export default DetailPresenter;

import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api"


export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            // 모조건 기다리게 한다 api resopne 을 받지 않음
            const { data: { results: nowPlaying } } = await moviesApi.nowPlaying();
            const { data: { results: upcoming } } = await moviesApi.upcoming();
            const { data: { results: popular } } = await moviesApi.popular();


            console.log('tag');
            this.setState({
                popular,
                nowPlaying,
                upcoming,
            });

        } catch (error) {
            this.setState({
                error: " Cant't find movies infomation."
            })
            console.log(error);

        }
        finally {
            // 머가 됫든 loading false
            this.setState({
                loading: false
            })
        }
    }



    render() {
        const { nowPlaying, upComing, popular, error, loading } = this.state;
        // console.log(this.state);
        return (
            <HomePresenter

                nowPlaying={nowPlaying}
                upComing={upComing}
                popular={popular}
                error={error}
                loading={loading}

            />
        )
    }

}
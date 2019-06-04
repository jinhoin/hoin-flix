import React from "react";
import TVPresnter from "./TVPresenter";
import {tvApi} from "api";
export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        showDetail: null,
        error: null,
        loading: true,
    };
    async componentDidMount() {
        try {
            const { data : { results: topRated } } = await tvApi.topRated();
            const { data : { results: popular } } = await tvApi.popular();
            const { data : { results : airingToday}} = await tvApi.airingToday();
            console.log(topRated);
            console.log(popular);
            // 함수명과 변수명이 같으면 생략가능 js에서는
            this.setState({
                topRated,
                popular,
                airingToday,
            });


        } catch (error) {
            this.setState({
                error : "error mounted"
            });
        }
    }


    render() {
        const { nowPlaying, upComing, popular, error, loading, tvDeatail } = this.state;
        console.log(this.state);
        return (
            <TVPresnter
                nowPlaying={nowPlaying}
                upComing={upComing}
                popular={popular}
                tvDetail={tvDeatail}

                error={error}
                loading={loading}

            />
        )
    }

}
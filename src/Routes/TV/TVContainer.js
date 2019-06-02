import React from "react";
import TVPresnter from "./TVPresenter";

export default class extends React.Component{
    state = {
        topRated :null,
        popular: null,
        airingToday :  null,
        tvDetail : null,
        error : null,
        loading :true,
    };

    render(){
        const {nowPlaying, upComing,popular , error, loading, tvDeatail} = this.state;
        return (
            <TVPresnter
            
                nowPlaying={nowPlaying}
                upComing = {upComing}
                popular={popular}
                 tvDetail = {tvDeatail}

                error = {error}
                loading = {loading}

            />
        )
    }

}
import React from "react";
import DeatailPresenter from "DetailPresenter";

export default class React.Component {
    state = {
        result: null,
        error : null,
        loading:true,


    },
    render(){
        const { result,error, loading} = this.state;
        return(
            result = {result}
            error = {error}
            loading = {loading}
        )
    }
}
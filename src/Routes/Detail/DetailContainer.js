import React from "react";
import DeatilPresenter from "./DeatilPresenter";

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true,


    };

    render() {
        const {
            result,
            error,
            loading
        } = this.state;
        return (
            <DeatilPresenter />

        )
    }
}
import React from "react";
import SearchPresenter from "./SearchPresenter";
import {
    moviesApi,
    tvApi
} from 'api';
export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        error: null,
        searchTerm: "",
        loading: false,
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    }

    updateTerm = (event) => {
        const { target: { value } } = event;
        this.setState({
            searchTerm: value
        });

    }

    searchByTerm = async () => {
        const {
            searchTerm
        } = this.state;

        try {
            const {
                data: {
                    results: movieResults
                }
            } = await moviesApi.search(searchTerm);

            const {
                data: {
                    results: tvResults
                }
            } = await tvApi.search(searchTerm);
            // console.log(movieResults, 'movieSearch');
            // console.log(tvResults, 'tvsearch');

            this.setState({
                movieResults,
                tvResults,

            })
        } catch {
            this.setState({
                error: "Cant't find results."
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const {
            movieResults,
            tvResults,
            searchTerm,
            loading,
            error,
        } = this.state;
        // console.log(this.state);

        return (
            <SearchPresenter
                movieResults={
                    movieResults
                }
                tvResults={
                    tvResults
                }
                searchTerm={
                    searchTerm
                }
                error={
                    error
                }
                loading={
                    loading
                }
                handleSubmit={this.handleSubmit
                }
                updateTerm={
                    this.updateTerm
                }

            />
        )
    }

}


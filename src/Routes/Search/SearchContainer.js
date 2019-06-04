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


    handleSubmit = () => {
        const {
            searchTerm
        } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
    }

    searchByTerm = async () => {
        const {
            searchTurm
        } = this.state;

        try {

            const {
                data: {
                    results: movieResults
                }
            } = await moviesApi.search(searchTurm);

            const {
                data: {
                    results: tvResults
                }
            } = await tvApi.search(searchTurm);
            console.log(movieResults, 'movieSearch');
            console.log(tvResults, 'tvsearch');

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
            error,
            searchTerm,
            loading,
        } = this.state;

        console.log(this.state)

        return ( <
            SearchPresenter movieResults = {
                movieResults
            }
            tvResults = {
                tvResults
            }
            searchTerm = {
                searchTerm
            }
            error = {
                error
            }
            loading = {
                loading
            }
            handleSubmit = {
                this.handleSubmit
            }

            / >
        )
    }

}
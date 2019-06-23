import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api"

export default class extends React.Component {
    constructor(props) {
        super(props)

        const { location: { pathname } } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            // 클래스를 만들어준거다
            isMovie: pathname.includes("/movie/"),
        }
    };

    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: { push },
            location: { pathname }
        } = this.props;
        const { isMovie } = this.state;

        // this.isMovie = pathname.include("/movie/");

        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push('/Home');
        }
        let result = null;
        try {
            if (isMovie) {
                ({ data: result } = await moviesApi.movieDeatail(parsedId));
            } else {
                ({ data: result } = await tvApi.showDetail((parsedId)));


            }
            console.log(result);
        } catch (error) {
            this.setState({
                error: "can' note find anything "

            });
        } finally {
            this.setState({ loading: false, result })
        }


    }


    render() {
        console.log('props', this.state);
        const {
            result,
            error,
            loading
        } = this.state;
        return (
            <DetailPresenter  />

        )
    }
}
import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "c3729dee48b1d9dd7d97807293b04853",
        language: "en-US",
    }
});

// 문자 열 조심 /를 넣지말자 절대경로로 인식됨
export const moviesApi = {
    now_playing: () => api.get("movie/now_playing"),
    upcomming: () => api.get("movie/upcomming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params : {
                append_to_response: "videos"
        }
    }),
    search: (term) => 
    api.get("search/movie", {
        params : {
            query : encodeURIComponent(term)
        }
    });

    
    
}

export const tvApi = {
    topRated : () => api.get("tv/top_ratead"),
    popular : () => api.get("tv/popular"),
    airingToday:() => api.get("tv/airing_today"),
    tvDetail: (id) => api.get(`tv/${id}`, {
        params : {
            append_to_response: "videos"
        }
    }),
    search: (term) => 
    api.get("search/tv", {
        params : {
            query : encodeURIComponent(term)
        }
    });
    
}



import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const DetailPresenter = ({

    error,
    loading,
    result,
}) => null;

DetailPresenter.propTypes = {
    ressult: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
}

export default DetailPresenter;
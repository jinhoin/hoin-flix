import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    display:flex;
    justify-content:center;
    /* align-items: center; */
`;

const Text = styled.span`
        color: ${props => props.color};
        font-weight : bold;
`;

const  Message = ({ text,color }) => <Container><Text color={color}>{text}</Text></Container>

 Message.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Message;
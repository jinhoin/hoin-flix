import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";


const Container = styled.section`
  :not(:last-child) {
     margin-bottom:20px;
  }
`;

const Title = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

const Grid = styled.div`
    margin-top:20px;
    display: grid;

    grid-template-columns:repeat(auto-fill, 125px);
    grid-gap: 25px;
`;

// Api에서 불러오는 데이터들을 콘테이너로 정리하는거
const Section = ({ title, children }) => (
  <Container>
    <Title>{title}  </Title>
    <Grid>{children} </Grid>
  </Container>
);

// Section 이라는 메서드에 프롭 타입을 지정함
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}


export default Section;
import React from "react";
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

//뒤에 무조건 `` 붙여야된다
const Header = styled.header`
    color: white;
    position : fixed;
    top : 0;
    left: 0;
    width: 100%;
    height: 50px;
    display:flex;
    align-items: center;
    padding : 0px 10px;
    z-index : 10;
    box-shadow : 0px 1px 5px 2px rgba(0,0,0,0.8);
      background-color: rgba(20, 20, 20, 0.8);

`;

const List = styled.ul`
    display:flex;
 `;

const Item = styled.li`
    width : 80px;
    height: 50px;
    text-align : center;
    display : flex;
    justify-content : center;
    align-items : center;
    
    border-bottom : 5px solid 
    ${props => (props.current ? "#3498db" : "transparent")};

    transition: border-bottom  0.5s ease-in-out;
    /* &:not(last-child){
    margin-right: 10px;
    } */
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items : center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        {
            console.log(pathname)
        }
        <List>
            <Item current={pathname === "/"}>
                <SLink to="Home">Home</SLink>
            </Item>
            <Item current={pathname === "/Search"}>
                <SLink to="Search">Search</SLink>
            </Item>
            <Item current={pathname === "/TV"}>
                <SLink to="TV">TV</SLink>
            </Item>

        </List>
    </Header>
));


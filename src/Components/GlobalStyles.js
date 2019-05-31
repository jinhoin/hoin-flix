import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color: white;
    }

    *{
        box-sizing:border-box;

    }
    body{
        /* font-family : */
        font-size:14px;
        background-color : black;
        color: white;
        opacity: 0.9;

                 padding-top:50px;

    }

  `;

export default globalStyles;
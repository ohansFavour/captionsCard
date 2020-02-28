import React from "react";

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: flex;
  border-color: blue;
`;

const Spinner = ({size})=>{
    return (
        <div className="sweet-loading">
          <ClipLoader
            css={override}
            size={size? `${size}`: 50}
            color= "blue"
            loading={true}
          />
        </div>
      );
}
export default Spinner;
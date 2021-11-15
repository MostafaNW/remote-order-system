import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
const Spinner = (props) => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return <ClipLoader loading={props.loading} size={150} css={override} />;
};

export default Spinner;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.padding.fourtyEight};
  iframe {
    width: 100%;
    height: 517.5px;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      height: 300px;
    }
  }
`;

const VideoGroup = props => (
  <Wrapper>
    <h3>{props.title}</h3>
    {props.children}
    {props.src && (
      <iframe
        title={props.title}
        src={props.src}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    )}
  </Wrapper>
);

VideoGroup.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  children: PropTypes.node
};

VideoGroup.defaultProps = {
  src: "",
  children: null
};

export default VideoGroup;

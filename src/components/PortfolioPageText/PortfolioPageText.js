import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p``;

const Group = styled.div`
  margin-bottom: ${props => props.theme.padding.thirtyTwo};
`;

const Heading = styled.h3`
  margin-bottom: ${props => props.theme.padding.sixteen};
  color: ${props => props.color};
  font-weight: 400;
`;

const SubHeading = styled.h4`
  margin-bottom: ${props => props.theme.padding.eight};
  margin-top: ${props => props.theme.padding.eight};
  color: ${props => props.color};
`;

const MainText = props => <Text>{props.children}</Text>;

MainText.propTypes = {
  children: PropTypes.node.isRequired,
};

const TextGroup = props => (
  <Group>
    <Heading color={props.color}>{props.heading}</Heading>
    {props.children}
  </Group>
);

TextGroup.propTypes = {
  heading: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TextGroup.defaultProps = {
  heading: '',
};

const MainTextSubHeading = props => (
  <SubHeading color={props.color}>{props.children}</SubHeading>
);

MainTextSubHeading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export { MainText, TextGroup, MainTextSubHeading };

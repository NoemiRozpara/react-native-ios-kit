/**
 * @flow
 */
import React from 'react';
import { Text } from 'react-native';
import StyledText from './StyledText';

type Config = Text.propTypes.style & {
  fontSize: number,
  tracking: number,
  leading: number,
  fontWeight: string,
};

const createText = (config: Config) => (props: Object) => (
  <StyledText {...props} config={config} />
);

export default createText;

/* @flow */

import { Text } from 'react-native';

import createText from './createText';

export const Title1 = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 28,
    leading: 34,
    tracking: 13,
    fontWeight: '200',
    ...style,
  });
export const Title2 = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 22,
    leading: 28,
    tracking: 16,
    fontWeight: '400',
    ...style,
  });
export const Title3 = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 20,
    leading: 24,
    tracking: 19,
    fontWeight: '400',
    ...style,
  });
export const Headline = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 17,
    leading: 22,
    tracking: -24,
    fontWeight: '600',
    ...style,
  });
export const Body = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 17,
    leading: 22,
    tracking: -24,
    fontWeight: '400',
    ...style,
  });
export const Callout = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 16,
    leading: 21,
    tracking: -20,
    fontWeight: '400',
    ...style,
  });
export const Subhead = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 15,
    leading: 20,
    tracking: -16,
    fontWeight: '400',
    ...style,
  });
export const Footnote = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 13,
    leading: 18,
    tracking: -6,
    fontWeight: '400',
    ...style,
  });
export const Caption1 = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 12,
    leading: 16,
    tracking: 0,
    fontWeight: '400',
    ...style,
  });
export const Caption2 = (style: Text.propTypes.style = {}) =>
  createText({
    fontSize: 11,
    leading: 13,
    tracking: 6,
    fontWeight: '400',
    ...style,
  });

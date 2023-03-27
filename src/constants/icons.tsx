import { SvgIcon } from '@mui/material';

import { Svg } from './Svg';

export const JavascriptIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.javascript.path} fill={Svg.javascript.hex} />
  </SvgIcon>
);

export const ReactIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.react.path} fill={Svg.react.hex} />
  </SvgIcon>
);

export const NodeJSIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.nodejs.path} fill={Svg.nodejs.hex} />
  </SvgIcon>
);

export const SpringIcon = () => (
  <SvgIcon viewBox='0 0 24 24' fontSize='inherit'>
    <path d={Svg.spring.path} fill={Svg.spring.hex} />
  </SvgIcon>
);

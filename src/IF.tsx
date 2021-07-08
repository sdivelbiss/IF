import React from 'react';
import { IFProps } from './types';

const IF = ({condition, children}: IFProps): React.ReactElement | JSX.Element | null => {
    if(!condition) {
      return null;
    };
    return children;
};

export default IF;
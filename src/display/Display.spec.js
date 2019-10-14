// Test away!
import React from 'react';

import { render } from '@testing-library/react';

import Display from './Display';

test('Controls renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
    render(<Display />);
});

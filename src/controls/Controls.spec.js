// Test away!
import React from 'react';

import { render } from '@testing-library/react';

import Controls from './Controls';

test('Controls renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
    render(<Controls />);
});

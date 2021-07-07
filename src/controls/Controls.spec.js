// Test away!
import React from 'react';

import { render } from '@testing-library/react';

import Controls from './Controls';

test('Controls renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
    render(<Controls />);
});

test('Provide buttons to toggle the closed and locked states', () => {
    const { getByText } = render(
        <Controls />
    );
    getByText(/Lock Gate/)
    getByText(/Close Gate/)
})

test('buttons text changes to reflect the state the door will be in if clicked', () => {
    
})

import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import IF from '..';


test('IF Components renders text', () => {
    const { getByText } = render(<IF condition={true}> <div>render this text</div></IF>)
    const expected = getByText('render this text')
    expect(expected).toBeInTheDocument()
});

test('IF Components returns null', () => {
  const { container } = render(<IF condition={false}><div>Don't render this text</div></IF>)
  expect(container.innerHTML).toHaveLength(0);
});

test('IF Components returns string', () => {
  const { getByText } = render(<IF condition={true}>string</IF>)
  const expected = getByText('string')
  expect(expected).toBeInTheDocument()
});
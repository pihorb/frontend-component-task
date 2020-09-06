import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Button from '../Button';
import {AppProvider} from '../../../store/context';

const renderButton = (cb, children) => {
  return cb(
    <AppProvider>
      <Button>{children}</Button>
    </AppProvider>
  );
};

beforeEach(cleanup);

describe('button component test', () => {
  it('renders correctly', () => {
    const {queryByTestId} = renderButton(render);

    expect(queryByTestId('btn')).toBeTruthy();
  });

  it('should have class button', () => {
    const {queryByTestId} = renderButton(render, 'click me!');

    expect(queryByTestId('btn').classList.contains('button')).toBe(true);
  });

  it('should display child', () => {
    const {queryByTestId} = renderButton(render, 'click me!');

    expect(queryByTestId('btn')).toHaveTextContent('click me!');
  });

  it('check if snapshot is matching', () => {
    const tree = renderButton(renderer.create).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

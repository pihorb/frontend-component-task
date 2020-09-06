import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckBoxes from '../Check-boxes';
import {AppProvider} from '../../../store/context';

const renderCheckBoxes = (cb, path) => {
  return cb(
    <AppProvider>
      <CheckBoxes path={path} />
    </AppProvider>
  );
};

beforeEach(cleanup);

describe('checkBoxes component test', () => {
  it('renders correctly', () => {
    const {queryByTestId} = renderCheckBoxes(render, 'folders');

    expect(queryByTestId('check-boxes')).toBeTruthy();
  });

  it('check class and value', () => {
    const {queryByTestId} = renderCheckBoxes(render, 'spam');
    const title = queryByTestId('check-boxes').firstChild;

    expect(title.classList.contains('check-boxes__title')).toBe(true);
    expect(title).toHaveTextContent('spam');
  });

  it('check list', () => {
    const {queryByTestId} = renderCheckBoxes(render, 'gems');

    expect(queryByTestId('check-boxes').children).not.toHaveLength(0);
  });

  it('check if snapshot is matching', () => {
    const tree = renderCheckBoxes(renderer.create).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckBox from '../Check-box';
import {AppProvider} from '../../../store/context';

const renderCheckBox = (cb, opts = {name: 'delete', path: 'folders'}) => {
  return cb(
    <AppProvider>
      <CheckBox {...opts} />
    </AppProvider>
  );
};

beforeEach(cleanup);

describe('checkBox component test', () => {
  it('renders correctly', () => {
    const {queryByTestId, getByAltText} = renderCheckBox(render);

    expect(queryByTestId('check-box')).toBeTruthy();
    expect(getByAltText('empty')).toBeTruthy();
    expect(queryByTestId('check-box').children[1]).toBeTruthy();
  });

  it('displays checkbox title', () => {
    const {getByAltText} = renderCheckBox(render);
    const icon = getByAltText('empty');

    fireEvent.click(icon);

    expect(icon.alt).toMatch('checked');
  });

  it('update state on click', () => {
    const {queryByTestId} = renderCheckBox(render, {name: 'view', path: 'gems'});

    expect(queryByTestId('check-box').children[1]).toHaveTextContent('view');
  });

  it('check if snapshot is matching', () => {
    const tree = renderCheckBox(renderer.create).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

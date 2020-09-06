import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import DropDown from '../Drop-down';
import {AppProvider} from '../../../store/context';

const renderDropDown = (cb) => {
  return cb(
    <AppProvider>
      <DropDown />
    </AppProvider>
  );
};

beforeEach(cleanup);

describe('dropDown component test', () => {
  it('renders correctly', () => {
    const {queryByTestId} = renderDropDown(render);

    expect(queryByTestId('dropdown')).toBeTruthy();
    expect(queryByTestId('dropdown').children[0]).toBeTruthy();
    expect(queryByTestId('dropdown').children[1]).toBeTruthy();
  });

  it('title should be present in dropdown list', () => {
    const {queryByTestId} = renderDropDown(render);
    const title = queryByTestId('dropdown').children[0].innerHTML;
    const list = Array.from(queryByTestId('dropdown').children[1].childNodes).map(
      (item) => item.innerHTML
    );

    expect(list).toContain(title);
    expect(list).toHaveLength(4);
  });

  it('check if snapshot is matching', () => {
    const tree = renderDropDown(renderer.create).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

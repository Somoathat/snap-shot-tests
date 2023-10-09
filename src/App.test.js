import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a snapshot', () => {
  const treeOriginal = renderer.create(<App />)
  const tree = treeOriginal.toJSON()
  // console.log({ treeOriginal, tree })
  expect(tree).toMatchSnapshot()
})


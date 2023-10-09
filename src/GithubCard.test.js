import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import GitHubCard from './GitHubCard';

test('renders a snapshot', () => {
  const treeOriginal = renderer.create(<GitHubCard />)
  const tree = treeOriginal.toJSON()
  expect(tree).toMatchSnapshot()
})


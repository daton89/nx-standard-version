import { render } from '@testing-library/react';

import App9Lib1 from './app9-lib1';

describe('App9Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});

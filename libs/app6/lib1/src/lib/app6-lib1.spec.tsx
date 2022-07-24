import { render } from '@testing-library/react';

import App6Lib1 from './app6-lib1';

describe('App6Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});

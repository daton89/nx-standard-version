import { render } from '@testing-library/react';

import App6Lib48 from './app6-lib48';

describe('App6Lib48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib48 />);
    expect(baseElement).toBeTruthy();
  });
});

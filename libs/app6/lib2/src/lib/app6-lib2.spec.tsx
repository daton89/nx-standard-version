import { render } from '@testing-library/react';

import App6Lib2 from './app6-lib2';

describe('App6Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});

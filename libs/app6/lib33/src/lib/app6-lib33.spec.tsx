import { render } from '@testing-library/react';

import App6Lib33 from './app6-lib33';

describe('App6Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});

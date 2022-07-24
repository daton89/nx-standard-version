import { render } from '@testing-library/react';

import App6Lib24 from './app6-lib24';

describe('App6Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});

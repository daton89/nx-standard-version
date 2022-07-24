import { render } from '@testing-library/react';

import App6Lib39 from './app6-lib39';

describe('App6Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});

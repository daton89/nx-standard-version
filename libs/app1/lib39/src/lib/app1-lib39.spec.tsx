import { render } from '@testing-library/react';

import App1Lib39 from './app1-lib39';

describe('App1Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App2Lib39 from './app2-lib39';

describe('App2Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});

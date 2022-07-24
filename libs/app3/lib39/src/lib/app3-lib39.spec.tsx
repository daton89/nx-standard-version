import { render } from '@testing-library/react';

import App3Lib39 from './app3-lib39';

describe('App3Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});

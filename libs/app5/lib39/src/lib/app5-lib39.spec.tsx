import { render } from '@testing-library/react';

import App5Lib39 from './app5-lib39';

describe('App5Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});

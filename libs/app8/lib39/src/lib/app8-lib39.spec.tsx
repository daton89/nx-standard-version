import { render } from '@testing-library/react';

import App8Lib39 from './app8-lib39';

describe('App8Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});

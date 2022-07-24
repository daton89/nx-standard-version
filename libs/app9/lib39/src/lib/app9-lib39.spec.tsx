import { render } from '@testing-library/react';

import App9Lib39 from './app9-lib39';

describe('App9Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});

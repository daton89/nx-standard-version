import { render } from '@testing-library/react';

import App4Lib39 from './app4-lib39';

describe('App4Lib39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib39 />);
    expect(baseElement).toBeTruthy();
  });
});

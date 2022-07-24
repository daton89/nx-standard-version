import { render } from '@testing-library/react';

import App4Lib15 from './app4-lib15';

describe('App4Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});

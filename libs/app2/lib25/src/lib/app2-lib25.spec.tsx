import { render } from '@testing-library/react';

import App2Lib25 from './app2-lib25';

describe('App2Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});

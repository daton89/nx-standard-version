import { render } from '@testing-library/react';

import App3Lib25 from './app3-lib25';

describe('App3Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});

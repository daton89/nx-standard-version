import { render } from '@testing-library/react';

import App3Lib30 from './app3-lib30';

describe('App3Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App2Lib30 from './app2-lib30';

describe('App2Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});

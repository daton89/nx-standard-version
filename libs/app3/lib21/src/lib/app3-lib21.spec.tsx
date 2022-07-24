import { render } from '@testing-library/react';

import App3Lib21 from './app3-lib21';

describe('App3Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});

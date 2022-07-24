import { render } from '@testing-library/react';

import App2Lib21 from './app2-lib21';

describe('App2Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});

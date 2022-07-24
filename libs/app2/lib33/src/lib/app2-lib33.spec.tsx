import { render } from '@testing-library/react';

import App2Lib33 from './app2-lib33';

describe('App2Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});

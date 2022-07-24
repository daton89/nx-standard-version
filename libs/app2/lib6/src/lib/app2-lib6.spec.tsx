import { render } from '@testing-library/react';

import App2Lib6 from './app2-lib6';

describe('App2Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});

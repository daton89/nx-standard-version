import { render } from '@testing-library/react';

import App3Lib6 from './app3-lib6';

describe('App3Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});

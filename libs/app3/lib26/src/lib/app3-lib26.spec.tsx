import { render } from '@testing-library/react';

import App3Lib26 from './app3-lib26';

describe('App3Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App2Lib26 from './app2-lib26';

describe('App2Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});

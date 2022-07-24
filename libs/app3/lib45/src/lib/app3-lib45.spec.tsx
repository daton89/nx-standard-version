import { render } from '@testing-library/react';

import App3Lib45 from './app3-lib45';

describe('App3Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App3Lib19 from './app3-lib19';

describe('App3Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App2Lib19 from './app2-lib19';

describe('App2Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});

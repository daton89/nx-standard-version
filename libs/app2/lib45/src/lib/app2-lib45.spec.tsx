import { render } from '@testing-library/react';

import App2Lib45 from './app2-lib45';

describe('App2Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});

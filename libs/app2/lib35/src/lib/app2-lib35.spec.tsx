import { render } from '@testing-library/react';

import App2Lib35 from './app2-lib35';

describe('App2Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});

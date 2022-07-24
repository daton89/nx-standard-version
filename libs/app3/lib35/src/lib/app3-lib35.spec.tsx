import { render } from '@testing-library/react';

import App3Lib35 from './app3-lib35';

describe('App3Lib35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib35 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App1Lib3 from './app1-lib3';

describe('App1Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App2Lib3 from './app2-lib3';

describe('App2Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});

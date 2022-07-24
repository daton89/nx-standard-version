import { render } from '@testing-library/react';

import App3Lib3 from './app3-lib3';

describe('App3Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});

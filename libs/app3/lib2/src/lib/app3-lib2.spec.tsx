import { render } from '@testing-library/react';

import App3Lib2 from './app3-lib2';

describe('App3Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});

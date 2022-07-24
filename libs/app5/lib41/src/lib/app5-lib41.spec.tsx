import { render } from '@testing-library/react';

import App5Lib41 from './app5-lib41';

describe('App5Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});

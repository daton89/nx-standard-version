import { render } from '@testing-library/react';

import App5Lib47 from './app5-lib47';

describe('App5Lib47', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib47 />);
    expect(baseElement).toBeTruthy();
  });
});

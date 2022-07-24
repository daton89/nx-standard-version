import { render } from '@testing-library/react';

import App5Lib25 from './app5-lib25';

describe('App5Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});

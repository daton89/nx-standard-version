import { render } from '@testing-library/react';

import App8Lib16 from './app8-lib16';

describe('App8Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});

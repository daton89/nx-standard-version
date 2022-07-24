import { render } from '@testing-library/react';

import App5Lib16 from './app5-lib16';

describe('App5Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});

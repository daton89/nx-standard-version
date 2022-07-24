import { render } from '@testing-library/react';

import App9Lib16 from './app9-lib16';

describe('App9Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});

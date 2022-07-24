import { render } from '@testing-library/react';

import App9Lib25 from './app9-lib25';

describe('App9Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});

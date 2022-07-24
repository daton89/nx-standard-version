import { render } from '@testing-library/react';

import App8Lib25 from './app8-lib25';

describe('App8Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});

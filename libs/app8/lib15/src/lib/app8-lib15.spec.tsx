import { render } from '@testing-library/react';

import App8Lib15 from './app8-lib15';

describe('App8Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});

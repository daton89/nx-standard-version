import { render } from '@testing-library/react';

import App8Lib27 from './app8-lib27';

describe('App8Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});

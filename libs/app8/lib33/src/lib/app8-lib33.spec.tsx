import { render } from '@testing-library/react';

import App8Lib33 from './app8-lib33';

describe('App8Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});

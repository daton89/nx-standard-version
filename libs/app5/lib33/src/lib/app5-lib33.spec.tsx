import { render } from '@testing-library/react';

import App5Lib33 from './app5-lib33';

describe('App5Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});

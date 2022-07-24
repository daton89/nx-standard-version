import { render } from '@testing-library/react';

import App9Lib33 from './app9-lib33';

describe('App9Lib33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib33 />);
    expect(baseElement).toBeTruthy();
  });
});

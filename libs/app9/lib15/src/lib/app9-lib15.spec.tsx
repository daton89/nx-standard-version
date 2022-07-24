import { render } from '@testing-library/react';

import App9Lib15 from './app9-lib15';

describe('App9Lib15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib15 />);
    expect(baseElement).toBeTruthy();
  });
});

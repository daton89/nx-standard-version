import { render } from '@testing-library/react';

import App9Lib21 from './app9-lib21';

describe('App9Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});

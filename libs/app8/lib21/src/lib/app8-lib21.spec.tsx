import { render } from '@testing-library/react';

import App8Lib21 from './app8-lib21';

describe('App8Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});

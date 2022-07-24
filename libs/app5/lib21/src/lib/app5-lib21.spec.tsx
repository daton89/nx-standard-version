import { render } from '@testing-library/react';

import App5Lib21 from './app5-lib21';

describe('App5Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});

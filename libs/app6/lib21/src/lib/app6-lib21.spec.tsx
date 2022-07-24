import { render } from '@testing-library/react';

import App6Lib21 from './app6-lib21';

describe('App6Lib21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib21 />);
    expect(baseElement).toBeTruthy();
  });
});

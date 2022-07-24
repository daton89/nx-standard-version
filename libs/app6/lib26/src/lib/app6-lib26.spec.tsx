import { render } from '@testing-library/react';

import App6Lib26 from './app6-lib26';

describe('App6Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});

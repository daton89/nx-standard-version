import { render } from '@testing-library/react';

import App6Lib3 from './app6-lib3';

describe('App6Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App6Lib45 from './app6-lib45';

describe('App6Lib45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib45 />);
    expect(baseElement).toBeTruthy();
  });
});

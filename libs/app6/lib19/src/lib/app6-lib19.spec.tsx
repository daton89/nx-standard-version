import { render } from '@testing-library/react';

import App6Lib19 from './app6-lib19';

describe('App6Lib19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6Lib19 />);
    expect(baseElement).toBeTruthy();
  });
});

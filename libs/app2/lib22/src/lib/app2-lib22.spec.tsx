import { render } from '@testing-library/react';

import App2Lib22 from './app2-lib22';

describe('App2Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});

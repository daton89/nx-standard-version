import { render } from '@testing-library/react';

import App3Lib22 from './app3-lib22';

describe('App3Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});

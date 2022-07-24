import { render } from '@testing-library/react';

import App5Lib22 from './app5-lib22';

describe('App5Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});

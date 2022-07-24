import { render } from '@testing-library/react';

import App8Lib22 from './app8-lib22';

describe('App8Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});

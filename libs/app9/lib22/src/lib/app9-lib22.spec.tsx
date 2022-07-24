import { render } from '@testing-library/react';

import App9Lib22 from './app9-lib22';

describe('App9Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});

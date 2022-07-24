import { render } from '@testing-library/react';

import App4Lib22 from './app4-lib22';

describe('App4Lib22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib22 />);
    expect(baseElement).toBeTruthy();
  });
});

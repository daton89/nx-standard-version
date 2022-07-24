import { render } from '@testing-library/react';

import App4Lib25 from './app4-lib25';

describe('App4Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});

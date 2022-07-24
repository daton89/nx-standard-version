import { render } from '@testing-library/react';

import App4Lib30 from './app4-lib30';

describe('App4Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});

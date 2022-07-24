import { render } from '@testing-library/react';

import App4Lib6 from './app4-lib6';

describe('App4Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});

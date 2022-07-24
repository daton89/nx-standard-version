import { render } from '@testing-library/react';

import App8Lib6 from './app8-lib6';

describe('App8Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});

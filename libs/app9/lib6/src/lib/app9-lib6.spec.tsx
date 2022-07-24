import { render } from '@testing-library/react';

import App9Lib6 from './app9-lib6';

describe('App9Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});

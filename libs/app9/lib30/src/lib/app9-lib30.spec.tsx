import { render } from '@testing-library/react';

import App9Lib30 from './app9-lib30';

describe('App9Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});

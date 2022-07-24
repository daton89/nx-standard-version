import { render } from '@testing-library/react';

import App9Lib28 from './app9-lib28';

describe('App9Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});

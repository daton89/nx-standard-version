import { render } from '@testing-library/react';

import App8Lib28 from './app8-lib28';

describe('App8Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});

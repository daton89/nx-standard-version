import { render } from '@testing-library/react';

import App5Lib28 from './app5-lib28';

describe('App5Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import App4Lib28 from './app4-lib28';

describe('App4Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});

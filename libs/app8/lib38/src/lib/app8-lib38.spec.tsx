import { render } from '@testing-library/react';

import App8Lib38 from './app8-lib38';

describe('App8Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});

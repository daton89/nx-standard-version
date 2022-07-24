import { render } from '@testing-library/react';

import App4Lib38 from './app4-lib38';

describe('App4Lib38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4Lib38 />);
    expect(baseElement).toBeTruthy();
  });
});

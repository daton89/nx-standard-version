import { render } from '@testing-library/react';

import App10Lib40 from './app10-lib40';

describe('App10Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});

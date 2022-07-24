import { render } from '@testing-library/react';

import App10Lib29 from './app10-lib29';

describe('App10Lib29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib29 />);
    expect(baseElement).toBeTruthy();
  });
});

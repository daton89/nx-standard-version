import { render } from '@testing-library/react';

import App10Lib27 from './app10-lib27';

describe('App10Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});

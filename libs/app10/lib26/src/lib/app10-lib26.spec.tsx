import { render } from '@testing-library/react';

import App10Lib26 from './app10-lib26';

describe('App10Lib26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib26 />);
    expect(baseElement).toBeTruthy();
  });
});

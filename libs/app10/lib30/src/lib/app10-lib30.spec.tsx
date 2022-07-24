import { render } from '@testing-library/react';

import App10Lib30 from './app10-lib30';

describe('App10Lib30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib30 />);
    expect(baseElement).toBeTruthy();
  });
});

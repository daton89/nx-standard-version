import { render } from '@testing-library/react';

import App10Lib6 from './app10-lib6';

describe('App10Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});

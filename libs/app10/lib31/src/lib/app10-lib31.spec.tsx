import { render } from '@testing-library/react';

import App10Lib31 from './app10-lib31';

describe('App10Lib31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib31 />);
    expect(baseElement).toBeTruthy();
  });
});

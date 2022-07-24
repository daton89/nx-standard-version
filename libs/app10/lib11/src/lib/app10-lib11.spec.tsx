import { render } from '@testing-library/react';

import App10Lib11 from './app10-lib11';

describe('App10Lib11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib11 />);
    expect(baseElement).toBeTruthy();
  });
});

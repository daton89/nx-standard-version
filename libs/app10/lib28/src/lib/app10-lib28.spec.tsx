import { render } from '@testing-library/react';

import App10Lib28 from './app10-lib28';

describe('App10Lib28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10Lib28 />);
    expect(baseElement).toBeTruthy();
  });
});

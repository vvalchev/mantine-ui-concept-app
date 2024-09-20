import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

export function render(children: React.ReactNode) {
  const { rerender, ...others } = testingLibraryRender(
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
  return {
    rerender: (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>) =>
      rerender(
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {ui}
        </MantineProvider>
      ),
    ...others,
  };
}

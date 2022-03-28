export function withHomePage(Component: React.FC) {
  function WithHomePage() {
    return <Component />
  }

  WithHomePage.displayName = `withHomePage(${
    Component.displayName ?? Component.name ?? 'Component'
  })`

  return WithHomePage
}

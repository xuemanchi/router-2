export function createMatcher(routes) {
  // make a route map
  const { pathMap } = createRouteMap(routes)
  const match = () => {

  }
  const addRoute = (routes) => {
    createRouteMap(routes, pathMap)
  }

  return {
    match,
    addRoute,
    pathMap,
  }
}

function createRouteMap(routes, oldPathMap) {
  const pathMap = oldPathMap || Object.create(null)

  routes.forEach((route) => {
    addRouteRecord(pathMap, route, null)
  })

  return {
    pathMap,
  }
}

function addRouteRecord(pathMap, route, parent) {
  const { path, component, children } = route
  const record = {
    path: parent ? `${parent.path}/${path}` : path,
    component,
    parent,
  }
  if (!pathMap[path])
    pathMap[path] = record

  if (children) {
    children.forEach((child) => {
      addRouteRecord(pathMap, child, record)
    })
  }
}

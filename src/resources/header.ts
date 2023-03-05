export const fetchNavItems = () => fetch("https://newstatic.adjarabet.com/static/menuListTurboKa.json?v=1677574185")
  .then((res) => res.json())
  .then(({list}) => list)
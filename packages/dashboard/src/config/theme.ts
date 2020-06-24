const theme = {
  unit: 'rem',
  fontFamily: 'Source sans',
  fontSize: {
    text: '1rem',
    sub: '0.8rem',
    heading1: 'calc(1.625rem + 1.6vw)',
    heading2: 'calc(1.375rem + 1.5vw)',
    heading3: 'calc(1.25rem + 1vw)',
  },
  color: {
    base: '#383855',
    text: '#606077',
    defaultText: '#C4C4C4',
    primary: '#195a63',
    disable: '#cccccc',
    link: '#2460c3',
    white: '#ffffff',
    red: '#c13636',
    allPlots: '#006E70',
    selectedTreeItem: '#38BEB4',
    sideTree: 'linear-gradient(0deg, #0FA79D 0%, #00B8AD 100%)',
    scroller: '#009093',
    back: '#E8E9E8',
  },
  fonts: {
  
  },
  space(...args: any[]) {
    const result = (args.length ? [...args] : [1]).reduce((str, curr) => `${str} ${curr}rem`, '')
    return result
  },
  css: {
    centered: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
    transition: 'all 300ms ease-in-out;',
  }
}

export default theme

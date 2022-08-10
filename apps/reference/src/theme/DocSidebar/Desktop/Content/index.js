import React from 'react'
import Content from '@theme-original/DocSidebar/Desktop/Content'
import { useLocation } from '@docusaurus/router'
import Link from '@docusaurus/Link'

const subNavRoutes = [
  // Add any routes which should have a subnav
  '/docs/reference/api',
  '/docs/reference/cli',
  '/docs/reference/auth-helpers',
  '/docs/reference/auth',
  '/docs/reference/storage',
  '/docs/reference/javascript',
  '/docs/reference/dart',
]

const headerNames = {
  api: {
    name: 'API',
    icon: null,
  },
  cli: {
    name: 'CLI',
    icon: null,
  },
  auth: {
    name: 'Auth',
    icon: null,
  },
  storage: {
    name: 'Storage',
    icon: null,
  },
  javascript: {
    name: 'supabase-js',
    icon: null,
  },
  dart: {
    name: 'Dart',
    icon: null,
  },
  'auth-helpers': {
    name: 'Auth Helpers',
    icon: null,
  },
}

const requiresSubNav = (pathname, routes) => {
  // if (pathname.includes('reference/auth-helpers')) return false
  const found = routes.find((route) => pathname.indexOf(route) == 0)
  console.log('found sub nav', found)
  return found
}

const RefHeader = (props) => {
  const paths = Object.keys(headerNames)
  const split = props.pathname.split('/')[3]
  const found = paths.find((p) => {
    return split === p
  })
  // return <p>hello world</p>
  console.log('found path', found)
  return (
    <div className="custom--main-menu-header-container">
      <div className="custom--main-menu-header__icon"></div>
      <h4 className="custom--main-menu-header">{headerNames[found].name}</h4>
    </div>
  )
}

export default function ContentWrapper(props) {
  const { pathname } = useLocation()

  // console.log('pathname', pathname)

  return (
    <div className="theme-doc-sidebar-menu-custom-container">
      {pathname && requiresSubNav(pathname, subNavRoutes) && (
        <>
          <Link to="/docs/reference" className="custom--main-menu-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                fill="currentColor"
              />
            </svg>
            <span>All Reference Docs</span>
          </Link>
          <RefHeader pathname={pathname} />
        </>
      )}
      <Content {...props} />
    </div>
  )
}

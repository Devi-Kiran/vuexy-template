import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  ///////////////Dashboard section//////////////////
  {
    path: '/admin/dashboard',
    component: lazy(() => import('../../views/pages/admin/dashboard'))
  },
  {
    path: '/admin/compare',
    component: lazy(() => import('../../views/pages/admin/dashboard/Analysis'))
  },
  {
    path: '/admin/call-enquiry/call-recordings',
    component: lazy(() => import('../../views/pages/admin/dashboard/SearchCR'))
  },
  {
    path: '/admin/dailer',
    component: lazy(() => import('../../views/pages/admin/dashboard/Dailer'))
  },
  ////////////////Allocations section////////////////////
  {
    path: '/admin/call-manager',
    component: lazy(() => import('../../views/pages/admin/allocations/ViewPortfolio'))
  },
  {
    path: '/admin/get-fos-users-list',
    component: lazy(() => import('../../views/pages/admin/allocations/ViewFOSList'))
  },
  ////////////////Assessment section////////////////////
  {
    path: '/admin/pos-analysis',
    component: lazy(() => import('../../views/pages/admin/assessment/POSGrid'))
  },
  {
    path: '/admin/location-grid-analysis',
    component: lazy(() => import('../../views/pages/admin/assessment/LocationGrid'))
  },
  {
    path: '/admin/strikes',
    component: lazy(() => import('../../views/pages/admin/assessment/Strikes'))
  },
  {
    path: '/admin/reviews',
    component: lazy(() => import('../../views/pages/admin/assessment/Reviews'))
  },
  {
    path: '/admin/reminder-summary',
    component: lazy(() => import('../../views/pages/admin/assessment/Reminders'))
  },
  {
    path: '/admin/field-remark-summary',
    component: lazy(() => import('../../views/pages/admin/assessment/FieldRemarks'))
  },
  ///////////////Milestone Section//////////////
  {
    path: '/admin/view-milestone',
    component: lazy(() => import('../../views/pages/admin/milestone'))
  },
  ///////////////Fieldwork Section//////////////
  {
    path: '/admin/field-report',
    component: lazy(() => import('../../views/pages/admin/fieldwork/FieldReport'))
  },
  {
    path: '/admin/user-track',
    component: lazy(() => import('../../views/pages/admin/fieldwork/TrackingHistory'))
  },
  {
    path: '/admin/fos/list',
    component: lazy(() => import('../../views/pages/admin/fieldwork/ListFOS'))
  },
  {
    path: '/admin/fos/visits',
    component: lazy(() => import('../../views/pages/admin/fieldwork/FOSVisits'))
  },
  {
    path: '/admin/fos/portfolio-visits',
    component: lazy(() => import('../../views/pages/admin/fieldwork/PortfolioVisits'))
  },
  /////////////Tasks Section////////////////
  {
    path: '/admin/get-cbk-users-list',
    component: lazy(() => import('../../views/pages/admin/tasks/CBKList'))
  },
  {
    path: '/admin/get-ptp-users-list',
    component: lazy(() => import('../../views/pages/admin/tasks/PTPList'))
  },
  {
    path: '/admin/get-bptp-users-list',
    component: lazy(() => import('../../views/pages/admin/tasks/BPTPList'))
  },
  {
    path: '/admin/trace-history',
    component: lazy(() => import('../../views/pages/admin/tasks/TraceList'))
  },
  ////////////Reports Section///////////////
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }


// /////////////Tasks Section////////////////
// {
//   path: '/admin/',
//   component: lazy(() => import('../../views/pages/admin/tasks'))
// },
// {
//   path: '/admin/',
//   component: lazy(() => import('../../views/pages/admin/tasks'))
// },
// {
//   path: '/admin/',
//   component: lazy(() => import('../../views/pages/admin/tasks'))
// },
// {
//   path: '/admin/',
//   component: lazy(() => import('../../views/pages/admin/tasks'))
// },
//////////////Payments Section//////////////
// {
//   path: '/admin/',
//   component: lazy(() => import('../../views/pages/admin/payments'))
// },
// {
//   path: '/admin/',
//   component: lazy(() => import('../../views/pages/admin/payments'))
// },
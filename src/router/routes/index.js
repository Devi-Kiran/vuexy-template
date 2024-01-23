import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/admin/dashboard'

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
    path: '/admin/search',
    component: lazy(() => import('../../views/pages/admin/dashboard/SearchAC'))
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
    path: '/admin/create-milestone',
    component: lazy(() => import('../../views/pages/admin/milestone/Create'))
  },
  {
    path: '/admin/view-milestone',
    component: lazy(() => import('../../views/pages/admin/milestone/View'))
  },
  {
    path: '/admin/edit-milestone',
    component: lazy(() => import('../../views/pages/admin/milestone/EditMilestone'))
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
  ////////////Payments Section//////////////
  {
    path: '/admin/get-paid-users-list',
    component: lazy(() => import('../../views/pages/admin/payments/PaidList'))
  },
  {
    path: '/admin/paid-reverse',
    component: lazy(() => import('../../views/pages/admin/payments/PaymentReversal'))
  },
  ////////////Reports Section///////////////
  {
    path: '/admin/daily-report',
    component: lazy(() => import('../../views/pages/admin/reports/ForTheDay'))
  },
  {
    path: '/admin/get-flow-report',
    component: lazy(() => import('../../views/pages/admin/reports/FlowReport'))
  },
  {
    path: '/admin/get-vintage-report',
    component: lazy(() => import('../../views/pages/admin/reports/VintageReport'))
  },
  {
    path: '/admin/campaign-report',
    component: lazy(() => import('../../views/pages/admin/reports/ByPortfolio'))
  },
  {
    path: '/admin/staff-report',
    component: lazy(() => import('../../views/pages/admin/reports/ByStaff'))
  },
  {
    path: '/admin/group-report',
    component: lazy(() => import('../../views/pages/admin/reports/ByTeam'))
  },
  {
    path: '/admin/get-fos-report-list',
    component: lazy(() => import('../../views/pages/admin/reports/FOSReport'))
  },
  {
    path: '/admin/agent-report',
    component: lazy(() => import('../../views/pages/admin/reports/AgentPerformance'))
  },
  {
    path: '/admin/pluse',
    component: lazy(() => import('../../views/pages/admin/reports/Pulse'))
  },
  ////////////Smart OBD Section/////////////////
  {
    path: '/admin/obd/credits',
    component: lazy(() => import('../../views/pages/admin/smartOBD/Credits'))
  },
  {
    path: '/admin/obd/transfer',
    component: lazy(() => import('../../views/pages/admin/smartOBD/Transfer'))
  },
  {
    path: '/admin/obd/did',
    component: lazy(() => import('../../views/pages/admin/smartOBD/Did'))
  },
  {
    path: '/admin/obd/create',
    component: lazy(() => import('../../views/pages/admin/smartOBD/CreateCampaign'))
  },
  {
    path: '/admin/obd/view',
    component: lazy(() => import('../../views/pages/admin/smartOBD/ViewCampaigns'))
  },
  //////////Administration Section////////
  //////////Attendance Section////////////
  {
    path: '/admin/on-duty',
    component: lazy(() => import('../../views/pages/admin/attendance/OnDuty'))
  },
  {
    path: '/admin/off-duty',
    component: lazy(() => import('../../views/pages/admin/attendance/OffDuty'))
  },
  {
    path: '/admin/attendance-history',
    component: lazy(() => import('../../views/pages/admin/attendance/History'))
  },
  {
    path: '/admin/punch',
    component: lazy(() => import('../../views/pages/admin/attendance/Punch'))
  },
  {
    path: '/admin/view-attendance',
    component: lazy(() => import('../../views/pages/admin/attendance/View'))
  },
  {
    path: '/admin/work-locations',
    component: lazy(() => import('../../views/pages/admin/attendance/WorkLocations'))
  },
  {
    path: '/admin/shifts',
    component: lazy(() => import('../../views/pages/admin/attendance/Shifts'))
  },
  //////////Users Section/////////////
  {
    path: '/admin/users',
    component: lazy(() => import('../../views/pages/admin/users'))
  },
  {
    path: '/admin/click2call',
    component: lazy(() => import('../../views/pages/admin/users/Click2Call'))
  },
  //////////Settings Section////////////
  {
    path: '/admin/settings/profile',
    component: lazy(() => import('../../views/pages/admin/settings/ProfileSettings'))
  },
  ////////Planner Section////////
  {
    path: '/admin/view-plans',
    component: lazy(() => import('../../views/pages/admin/planner/ViewPlanner'))
  },
  ///////////Targets Section///////////
  {
    path: '/admin/create-target',
    component: lazy(() => import('../../views/pages/admin/Targets/SetTarget'))
  },
  {
    path: '/admin/view-target',
    component: lazy(() => import('../../views/pages/admin/Targets/ViewTarget'))
  },
  //////Notifications Section///////
  {
    path: '/admin/notifications',
    component: lazy(() => import('../../views/pages/admin/notifications'))
  },
  {
    path: '/admin/announcement',
    component: lazy(() => import('../../views/pages/admin/notifications/Announcement'))
  },
  {
    path: '/admin/appreciation',
    component: lazy(() => import('../../views/pages/admin/notifications/Appreciation'))
  },
  //////////Repo Section////////////
  {
    path: '/admin/repo-search',
    component: lazy(() => import('../../views/pages/admin/repo/RepoSearch'))
  },
  {
    path: '/admin/repo-history',
    component: lazy(() => import('../../views/pages/admin/repo/SearchHistory'))
  },
  /////////Other sections//////////
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
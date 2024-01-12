import { Mail, Clipboard, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User } from 'react-feather'

export default [
  {
    id: 'dashboardDropdown',
    title: 'Dashboard',
    icon: <Mail size={20} />,
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: <Circle size={12} />,
        navLink: "/admin/dashboard"
      },
      {
        id: 'analysis',
        title: 'Analysis',
        icon: <Circle size={12} />,
        navLink: "/admin/compare"
      },
      {
        id: 'searchCR',
        title: 'Search CR',
        icon: <Circle size={12} />,
        navLink: "/admin/call-enquiry/call-recordings"
      },
      {
        id: 'dailer',
        title: 'Dailer',
        icon: <Circle size={12} />,
        navLink: "/admin/dailer"
      }
    ]
  },
  {
    id: "allocationsDropdown",
    title: "Allocations",
    icon: <Mail size={20} />,
    children: [
      {
        id: 'viewPortfolios',
        title: 'View Portfolios',
        icon: <Circle size={12} />,
        navLink: "/admin/call-manager"
      },
      {
        id: 'viewFOPList',
        title: 'View FOS List',
        icon: <Circle size={12} />,
        navLink: "/admin/get-fos-users-list"
      }
    ]
  },
  {
    id: "assessmentDropdown",
    title: "Assessment",
    icon: <Clipboard size={20} />,
    children: [
      {
        id: 'posGrid',
        title: 'POS Grid',
        icon: <Circle size={12} />,
        navLink: "/admin/pos-analysis"
      },
      {
        id: 'locationGrid',
        title: 'Location Grid',
        icon: <Circle size={12} />,
        navLink: "/admin/location-grid-analysis"
      },
      {
        id: 'strikes',
        title: 'Strikes',
        icon: <Circle size={12} />,
        navLink: "/admin/strikes"
      },
      {
        id: 'reviews',
        title: 'Reviews',
        icon: <Circle size={12} />,
        navLink: "/admin/reviews"
      },
      {
        id: 'reminders',
        title: 'Reminders',
        icon: <Circle size={12} />,
        navLink: "/admin/reminder-summary"
      },
      {
        id: 'fieldRemarks',
        title: 'Field Remarks',
        icon: <Circle size={12} />,
        navLink: "/admin/field-remark-summary"
      }
    ]
  },
  {
    id: "mileStoneDropdown",
    title: "Milestone",
    icon: <Mail size={20} />,
    children: [
      {
        id: "viewMilestone",
        title: "View",
        icon: <Circle size={12} />,
        navLink: "/admin/view-milestone"
      }
    ]
  },
  {
    id: 'fieldWorkDropdown',
    title: 'Flield Work',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'fieldReport',
        title: 'Field Report',
        icon: <Circle size={12} />,
        navLink: '/admin/field-report'
      },
      {
        id: 'trackingHistory',
        title: 'Tracking History',
        icon: <Circle size={12} />,
        navLink: '/admin/user-track'
      },
      {
        id: 'listFOS',
        title: 'List FOS',
        icon: <Circle size={12} />,
        navLink: '/admin/fos/list'
      },
      {
        id: 'fosVisits',
        title: 'FOS Visits',
        icon: <Circle size={12} />,
        navLink: '/admin/fos/visits'
      },
      {
        id: 'portfolioVisites',
        title: 'Portfolio Visits',
        icon: <Circle size={12} />,
        navLink: '/admin/fos/portfolio-visits'
      }
    ]
  },
  {
    id: 'taksDropdow',
    title: 'Tasks',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'cbkList',
        title: 'CBK List',
        icon: <Circle size={12} />,
        navLink: '/admin/get-cbk-users-list'
      },
      {
        id: 'ptpList',
        title: 'PTP List',
        icon: <Circle size={12} />,
        navLink: '/admin/get-ptp-users-list'
      },
      {
        id: 'bptpList',
        title: 'BPTP List',
        icon: <Circle size={12} />,
        navLink: '/admin/get-bptp-users-list'
      },
      {
        id: 'traceList',
        title: 'Trace List',
        icon: <Circle size={12} />,
        navLink: '/admin/trace-history'
      }
    ]
  },
  {
    id: 'paymetsDropdow',
    title: 'Payments',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'paidList',
        title: 'Paid List',
        icon: <Circle size={12} />,
        navLink: '/admin/get-paid-users-list'
      },
      {
        id: 'paymentReversal',
        title: 'Payment Reversal',
        icon: <Circle size={12} />,
        navLink: '/admin/paid-reverse'
      }
    ]
  },
  {
    id: 'reportDropdow',
    title: 'Reports',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'forTheDay',
        title: 'For The Day',
        icon: <Circle size={12} />,
        navLink: '/admin/daily-report'
      },
      {
        id: 'flowReport',
        title: 'Flow Report',
        icon: <Circle size={12} />,
        navLink: '/admin/get-flow-report'
      },
      {
        id: 'vintageReport',
        title: 'Vintage Report',
        icon: <Circle size={12} />,
        navLink: '/admin/get-vintage-report'
      },
      {
        id: 'byPortfolio',
        title: 'By Portfolio',
        icon: <Circle size={12} />,
        navLink: '/admin/campaign-report'
      },
      {
        id: 'byStaff',
        title: 'By Staff',
        icon: <Circle size={12} />,
        navLink: '/admin/staff-report'
      },
      {
        id: 'bTeam',
        title: 'By Team',
        icon: <Circle size={12} />,
        navLink: '/admin/group-report'
      },
      {
        id: 'fosReport',
        title: 'FOS Report',
        icon: <Circle size={12} />,
        navLink: '/admin/get-fos-report-list'
      },
      {
        id: 'agentPerformance',
        title: 'Agent Performance',
        icon: <Circle size={12} />,
        navLink: '/admin/agent-report'
      },
      {
        id: 'pluse',
        title: 'Pluse',
        icon: <Circle size={12} />,
        navLink: '/admin/pluse'
      }
    ]
  },
  {
    id: 'smartOBDDropdown',
    title: 'Smart OBD',
    icon: <Mail size={20} />,
    children: [
      {
        id: 'credits',
        title: 'Credits',
        icon: <Circle size={12} />,
        navLink: '/admin/obd/credits'
      },
      {
        id: 'transfer',
        title: 'Transfer',
        icon: <Circle size={12} />,
        navLink: '/admin/obd/transfer'
      },
      {
        id: 'did',
        title: 'Did',
        icon: <Circle size={12} />,
        navLink: '/admin/obd/did'
      },
      {
        id: 'createCampaign',
        title: 'Create Campaign',
        icon: <Circle size={12} />,
        navLink: '/admin/obd/create'
      },
      {
        id: 'viewCampaigns',
        title: 'View Campaigns',
        icon: <Circle size={12} />,
        navLink: '/admin/obd/view'
      }
    ]
  },
  {
    id: 'administrationDropdown',
    title: 'Adminstration',
    icon: <Mail size={20} />,
    children: [
      {
        id: "adminstration"
      }
    ]
  },
  {
    id: 'attendanceDropdown',
    title: 'Attendance',
    icon: <Mail size={20} />,
    children: [
      {
        id: 'onDuty',
        title: 'On Duty',
        icon: <Circle size={12} />,
        navLink: '/admin/on-duty'
      },
      {
        id: 'offDuty',
        title: 'Off Duty',
        icon: <Circle size={12} />,
        navLink: '/admin/off-duty'
      },
      {
        id: 'attendanceHistory',
        title: 'History',
        icon: <Circle size={12} />,
        navLink: '/admin/attendance-history'
      },
      {
        id: 'punch',
        title: 'Punch',
        icon: <Circle size={12} />,
        navLink: '/admin/punch'
      },
      {
        id: 'viewAttendance',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/admin/view-attendance'
      },
      {
        id: 'workLocations',
        title: 'Work Locations',
        icon: <Circle size={12} />,
        navLink: '/admin/work-locations'
      },
      {
        id: 'shifts',
        title: 'Shifts',
        icon: <Circle size={12} />,
        navLink: '/admin/shifts'
      }
    ]
  },
  {
    id: 'usersDropdown',
    title: 'Users',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'staffMembers',
        title: 'Staff Members',
        icon: <Circle size={12} />,
        navLink: '/admin/users'
      },
      {
        id: 'click2Call',
        title: 'Click2Call',
        icon: <Circle size={12} />,
        navLink: '/admin/click2call'
      }
    ]
  },
  {
    id: 'settingsDropdown',
    title: 'Settings',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'profileSettings',
        title: 'Profile Settings',
        icon: <Circle size={12} />,
        navLink: '/admin/settings/profile'
      }
    ]
  },
  {
    id: 'plannerDropdown',
    title: 'Planner',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'viewPlans',
        title: 'View Plans',
        icon: <Circle size={12} />,
        navLink: '/admin/view-plans'
      }
    ]
  },
  {
    id: 'targetsDropdown',
    title: 'Targets',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'setTarget',
        title: 'Set Target',
        icon: <Circle size={12} />,
        navLink: '/admin/create-target'
      },
      {
        id: 'viewTarget',
        title: 'View Target',
        icon: <Circle size={12} />,
        navLink: '/admin/view-target'
      }
    ]
  },
  {
    id: 'notificationsDropdown',
    title: 'Notifications',
    icon: <ShoppingCart size={20} />,
    children: [
      {
        id: 'notificationList',
        title: 'Notification List',
        icon: <Circle size={12} />,
        navLink: '/admin/notifications'
      },
      {
        id: 'annoucement',
        title: 'Announcement',
        icon: <Circle size={12} />,
        navLink: '/admin/announcement'
      },
      {
        id: 'appreciation',
        title: 'Appreciation',
        icon: <Circle size={12} />,
        navLink: '/admin/appreciation'
      }
    ]
  },
  {
    id: 'repoDropdown',
    title: 'Repo',
    icon: <User size={20} />,
    children: [
      {
        id: 'repoSearch',
        title: 'Repo Search',
        icon: <Circle size={12} />,
        navLink: '/admin/repo-search'
      },
      {
        id: 'searchHistory',
        title: 'Search History',
        icon: <Circle size={12} />,
        navLink: '/admin/repo-history'
      }
    ]
  }
]

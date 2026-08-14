// Menu structure taken directly from the original #menu-primary-menu-classic markup
const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  {
    label: 'Our Services',
    path: '/services',
    children: [
      { label: 'Site Selection & Feasibility', path: '/services/site-selection-feasibility' },
      {
        label: 'Specialised Site Support',
        path: '/services/specialised-site-support',
        children: [
          { label: 'Rapid Start-up', path: '/services/specialised-site-support/rapid-start-up' },
          {
            label: 'Overall study management',
            path: '/services/specialised-site-support/overall-study-management',
          },
        ],
      },
      { label: 'Training', path: '/services/training' },
      { label: 'Clinical Research', path: '/services/clinical-research' },
    ],
  },
  { label: 'Contact Us', path: '/contact-us' },
];

export default navigation;

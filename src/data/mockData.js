export const projects = [
  { id: 1, name: 'E-Commerce Redesign', color: '#7c3aed', progress: 72, tasks: 18, members: ['AS', 'JK', 'ML'], due: 'Apr 12' },
  { id: 2, name: 'Mobile App v2.0', color: '#0ea5e9', progress: 45, tasks: 24, members: ['RN', 'AS', 'PK'], due: 'May 3' },
  { id: 3, name: 'API Integration', color: '#10b981', progress: 88, tasks: 12, members: ['AS', 'TW'], due: 'Mar 28' },
  { id: 4, name: 'Dashboard Analytics', color: '#f59e0b', progress: 30, tasks: 20, members: ['ML', 'JK', 'AS', 'RN'], due: 'Jun 1' },
];

export const team = [
  { id: 1, name: 'Amandeep Singh', initials: 'AS', role: 'Lead Developer', tasks: 8, color: '#7c3aed', status: 'online' },
  { id: 2, name: 'James Kim', initials: 'JK', role: 'Frontend Dev', tasks: 5, color: '#0ea5e9', status: 'online' },
  { id: 3, name: 'Maria Lopez', initials: 'ML', role: 'UI Designer', tasks: 6, color: '#10b981', status: 'away' },
  { id: 4, name: 'Raj Nair', initials: 'RN', role: 'Backend Dev', tasks: 4, color: '#f59e0b', status: 'offline' },
  { id: 5, name: 'Priya Kapoor', initials: 'PK', role: 'QA Engineer', tasks: 3, color: '#ec4899', status: 'online' },
  { id: 6, name: 'Tom Wu', initials: 'TW', role: 'DevOps', tasks: 2, color: '#06b6d4', status: 'away' },
];

export const initialTasks = {
  todo: [
    { id: 't1', title: 'Design login page mockups', priority: 'high', project: 'E-Commerce Redesign', assignee: 'ML', due: 'Mar 30', tags: ['design', 'ui'] },
    { id: 't2', title: 'Set up AWS S3 bucket for assets', priority: 'medium', project: 'API Integration', assignee: 'TW', due: 'Apr 2', tags: ['devops', 'aws'] },
    { id: 't3', title: 'Write unit tests for auth module', priority: 'high', project: 'Mobile App v2.0', assignee: 'PK', due: 'Apr 5', tags: ['testing'] },
    { id: 't4', title: 'Create onboarding flow screens', priority: 'low', project: 'Dashboard Analytics', assignee: 'ML', due: 'Apr 10', tags: ['design'] },
  ],
  inprogress: [
    { id: 't5', title: 'Implement JWT authentication', priority: 'high', project: 'E-Commerce Redesign', assignee: 'AS', due: 'Mar 28', tags: ['backend', 'auth'] },
    { id: 't6', title: 'Build product listing API', priority: 'high', project: 'API Integration', assignee: 'RN', due: 'Mar 29', tags: ['backend', 'api'] },
    { id: 't7', title: 'Responsive navbar component', priority: 'medium', project: 'Mobile App v2.0', assignee: 'JK', due: 'Apr 1', tags: ['frontend'] },
    { id: 't8', title: 'Analytics chart components', priority: 'medium', project: 'Dashboard Analytics', assignee: 'AS', due: 'Apr 8', tags: ['frontend', 'charts'] },
  ],
  review: [
    { id: 't9', title: 'Payment gateway integration', priority: 'high', project: 'E-Commerce Redesign', assignee: 'AS', due: 'Mar 27', tags: ['backend', 'payments'] },
    { id: 't10', title: 'Database schema optimisation', priority: 'medium', project: 'API Integration', assignee: 'RN', due: 'Mar 26', tags: ['database'] },
  ],
  done: [
    { id: 't11', title: 'Project setup & CI/CD pipeline', priority: 'high', project: 'Mobile App v2.0', assignee: 'TW', due: 'Mar 20', tags: ['devops'] },
    { id: 't12', title: 'Figma design system', priority: 'medium', project: 'E-Commerce Redesign', assignee: 'ML', due: 'Mar 22', tags: ['design'] },
    { id: 't13', title: 'User research & personas', priority: 'low', project: 'Dashboard Analytics', assignee: 'JK', due: 'Mar 18', tags: ['research'] },
  ],
};

export const stats = [
  { label: 'Total Tasks', value: 22, change: '+4 this week', color: '#7c3aed', icon: '📋' },
  { label: 'Completed', value: 13, change: '59% completion', color: '#10b981', icon: '✅' },
  { label: 'In Progress', value: 4, change: '2 due today', color: '#f59e0b', icon: '🔄' },
  { label: 'Team Members', value: 6, change: '5 active now', color: '#0ea5e9', icon: '👥' },
];

export const activity = [
  { user: 'AS', action: 'completed', task: 'Payment gateway integration', time: '10m ago', color: '#7c3aed' },
  { user: 'JK', action: 'commented on', task: 'Responsive navbar component', time: '25m ago', color: '#0ea5e9' },
  { user: 'ML', action: 'moved', task: 'Figma design system to Done', time: '1h ago', color: '#10b981' },
  { user: 'RN', action: 'started', task: 'Database schema optimisation', time: '2h ago', color: '#f59e0b' },
  { user: 'PK', action: 'created', task: 'Write unit tests for auth module', time: '3h ago', color: '#ec4899' },
];

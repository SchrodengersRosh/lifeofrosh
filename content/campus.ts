export interface CampusRole {
  team: string
  description: string
}

export interface CampusEvent {
  name: string
  type: string
  roles: string[]
}

export const campusRoles: CampusRole[] = [
  {
    team: 'Emcee',
    description:
      'Hosted college events at DSCE, keeping audiences engaged through schedule changes and technical failures.',
  },
  {
    team: 'Marketing',
    description:
      'Worked on event marketing and promotion for college festivals and departmental events.',
  },
  {
    team: 'Public Relations',
    description:
      'Handled PR for campus events, managing outreach and communications.',
  },
  {
    team: 'Fashion',
    description:
      'Part of the fashion team for campus events and shows.',
  },
]

export const campusEvents: CampusEvent[] = [
  {
    name: 'DSCE Campus Events',
    type: 'College Festival',
    roles: ['Emcee', 'Marketing', 'PR', 'Fashion'],
  },
]

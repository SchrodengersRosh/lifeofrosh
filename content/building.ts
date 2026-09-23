export interface BuildingProject {
  name: string
  description: string
  status: string
  placeholder: boolean
}

export const currentlyBuilding: BuildingProject[] = [
  {
    name: 'CORE',
    description: 'Toward publication.',
    status: 'In development',
    placeholder: false,
  },
  {
    name: 'REVENANT',
    description:
      "An AI and backend systems project. Details when it's ready to be talked about properly.",
    status: 'In development',
    placeholder: false,
  },
]

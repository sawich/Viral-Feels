export interface Chat {
  uuid: string
  name: string

  model: string
  pinned: boolean

  createdAt: Date
  updatedAt: Date
}

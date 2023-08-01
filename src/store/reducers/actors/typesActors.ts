export interface IActor {
  gender: number
  id: number
  name: string
  profile_path: string
}

export type QueryType = {
  page: number
  search?: string
}

export interface IActorsState {
  popular: {
    actors: Record<number, IActor[]>
    total_pages: number
  }
  search: {
    actors: Record<number, IActor[]>
    total_pages: number
  }
  currentPage: number
  status: 'idle' | 'loading' | 'failed';
}

export interface Member {
  id: string;
  name: string;
  class: string;
}

export interface Team {
  id: string;
  name: string;
  memberIds: string;
}

export interface Competition {
  id: string;
  name: string;
  date: string;
}

export interface Award {
  id: number;
  competitionId: string;
  memberId?: string;
  teamId?: string;
  rank?: number;
  awardName: string;
}
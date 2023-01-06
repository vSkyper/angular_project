export interface CrewMember {
  crew: string;
  role: string;
}

export const _crewMember: CrewMember = {
  crew: '',
  role: '',
};

export interface HistoryEvent {
  links: {
    article: string;
  };
  title: string;
  event_date_utc: Date;
  event_date_unix: number;
  details: string;
  id: string;
}

export const _historyEvent: HistoryEvent = {
  links: {
    article: '',
  },
  title: '',
  event_date_utc: new Date(),
  event_date_unix: 0,
  details: '',
  id: '',
};

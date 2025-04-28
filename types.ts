export type RaceResultType = {
  grandPrixName: string;
  circuit: {
    id: number;
    name: string;
    location: string;
  };
  raceResults: {
    position: number;
    points: number;
    driver: {
      firstName: string;
      lastName: string;
      currentTeam: {
        name: string;
      };
    };
  }[];
} | null;

export type TeamWithEngineProvider = {
  id: number;
  name: string;
  base: string;
  principal: string;
  engineProviderId: number;
  engineProvider: {
    id: number;
    name: string;
  };
};

export type RaceWithWinningDriver = {
  race: {
    id: number;
    grandPrixName: string;
    circuitId: number;
    date: Date; // ISO string
  };
  driver: {
    firstName: string;
    lastName: string;
  };
};

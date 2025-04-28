import { Driver, EngineProvider, Team } from "@prisma/client";
import {
  calculateTotalPointsByDriver,
  getBritishDrivers,
  getEngineProviders,
  getRaceResultByRaceId,
  getRacesWonByDriver,
  getTeamsByEngineProvider,
} from "../sprint";
import {
  RaceResultType,
  RaceWithWinningDriver,
  TeamWithEngineProvider,
} from "../types";

describe("getEngineProviders(", () => {
  test("returns a list of engine providers", async () => {
    const engineProviders: EngineProvider[] = await getEngineProviders();
    expect(engineProviders).toEqual([
      { id: 1, name: "Mercedes" },
      { id: 2, name: "Ferrari" },
      { id: 3, name: "Renault" },
      { id: 4, name: "Honda" },
    ]);
  });
});

describe.skip("getBritishDrivers", () => {
  test("returns a list of british drivers", async () => {
    const britishDrivers: Driver[] = await getBritishDrivers();

    expect(britishDrivers).toEqual([
      {
        id: 1,
        firstName: "Lewis",
        lastName: "Hamilton",
        nationality: "British",
        dateOfBirth: expect.any(Date),
        points: 4865,
        championships: 7,
        teamId: 1,
      },
      {
        id: 4,
        firstName: "Lando",
        lastName: "Norris",
        nationality: "British",
        dateOfBirth: expect.any(Date),
        points: 596,
        championships: 0,
        teamId: 5,
      },
      {
        id: 5,
        firstName: "George",
        lastName: "Russell",
        nationality: "British",
        dateOfBirth: expect.any(Date),
        points: 421,
        championships: 0,
        teamId: 1,
      },
      {
        id: 22,
        firstName: "Oliver",
        lastName: "Bearman",
        nationality: "British",
        dateOfBirth: expect.any(Date),
        points: 7,
        championships: 0,
        teamId: 8,
      },
    ]);
  });
});

describe.skip("getTeamsByEngineProvider", () => {
  test("returns an array of teams and engine provider info when passed an engineProviderId", async () => {
    const teamsUsingHondaEngines: TeamWithEngineProvider[] =
      await getTeamsByEngineProvider(4);
    expect(teamsUsingHondaEngines).toEqual([
      {
        id: 4,
        name: "Oracle Red Bull Racing",
        base: "Milton Keynes, United Kingdom",
        principal: "Christian Horner",
        engineProviderId: 4,
        engineProvider: { id: 4, name: "Honda" },
      },
      {
        id: 10,
        name: "Visa Cash App RB Formula One Team",
        base: "Faenza, Italy",
        principal: "Laurent Mekies",
        engineProviderId: 4,
        engineProvider: { id: 4, name: "Honda" },
      },
    ]);
  });
});

describe.skip("getRacesWonByDriver", () => {
  test("returns a list of races won by a chosen driver including information about the races", async () => {
    const racesWonByLandoNorris: RaceWithWinningDriver[] =
      await getRacesWonByDriver(4);
    expect(racesWonByLandoNorris).toEqual([
      {
        race: {
          id: 19,
          grandPrixName: "Miami Grand Prix",
          circuitId: 19,
          date: expect.any(Date),
        },
        driver: {
          firstName: "Lando",
          lastName: "Norris",
        },
      },
      {
        race: {
          id: 15,
          grandPrixName: "Dutch Grand Prix",
          circuitId: 15,
          date: expect.any(Date),
        },
        driver: {
          firstName: "Lando",
          lastName: "Norris",
        },
      },
      {
        race: {
          id: 6,
          grandPrixName: "Singapore Grand Prix",
          circuitId: 6,
          date: expect.any(Date),
        },
        driver: {
          firstName: "Lando",
          lastName: "Norris",
        },
      },
      {
        race: {
          id: 4,
          grandPrixName: "Abu Dhabi Grand Prix",
          circuitId: 4,
          date: expect.any(Date),
        },
        driver: {
          firstName: "Lando",
          lastName: "Norris",
        },
      },
    ]);
  });
});

describe.skip("calculateTotalPointsByDriver", () => {
  test("returns a number representing the total number of points scored by a chosen driver from all the races", async () => {
    const totalPointsScoredByMaxVerstappen: number =
      await calculateTotalPointsByDriver(2);
    expect(totalPointsScoredByMaxVerstappen).toBe(401);
  });
});

describe.skip("getRaceResultByRaceId", () => {
  test("returns race results by provided raceId", async () => {
    const silverstoneResults: RaceResultType = await getRaceResultByRaceId(1);

    expect(silverstoneResults).toEqual({
      grandPrixName: "British Grand Prix",
      circuit: {
        id: 1,
        name: "Silverstone Circuit",
        location: "Silverstone, United Kingdom",
      },
      raceResults: [
        {
          position: 1,
          points: 25,
          driver: {
            firstName: "Lewis",
            lastName: "Hamilton",
            currentTeam: {
              name: "Mercedes-AMG Petronas Formula One Team",
            },
          },
        },
        {
          position: 2,
          points: 18,
          driver: {
            firstName: "Max",
            lastName: "Verstappen",
            currentTeam: {
              name: "Oracle Red Bull Racing",
            },
          },
        },
        {
          position: 3,
          points: 15,
          driver: {
            firstName: "Lando",
            lastName: "Norris",
            currentTeam: {
              name: "McLaren F1 Team",
            },
          },
        },
      ],
    });
  });
});

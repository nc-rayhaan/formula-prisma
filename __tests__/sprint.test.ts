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
    expect(britishDrivers).toHaveLength(4);
    britishDrivers.forEach((driver) => {
      expect(driver).toEqual({
        id: expect.any(Number),
        firstName: expect.any(String),
        lastName: expect.any(String),
        nationality: "British",
        dateOfBirth: expect.any(Date),
        points: expect.any(Number),
        championships: expect.any(Number),
        teamId: expect.any(Number),
      });
    });
  });
});

describe.skip("getTeamsByEngineProvider", () => {
  test("returns an array of teams and engine provider info when passed an engineProviderId", async () => {
    const teamsUsingHondaEngines: TeamWithEngineProvider[] =
      await getTeamsByEngineProvider(4);
    expect(teamsUsingHondaEngines).toHaveLength(2);
    teamsUsingHondaEngines.forEach((team) => {
      expect(team).toEqual({
        id: expect.any(Number),
        name: expect.any(String),
        base: expect.any(String),
        principal: expect.any(String),
        engineProviderId: expect.any(Number),
        engineProvider: { id: 4, name: "Honda" },
      });
    });
  });
});

describe.skip("getRacesWonByDriver", () => {
  test("returns a list of races won by a chosen driver including information about the races", async () => {
    const racesWonByLandoNorris: RaceWithWinningDriver[] =
      await getRacesWonByDriver(4);
    expect(racesWonByLandoNorris).toHaveLength(4);
    racesWonByLandoNorris.forEach((race) => {
      expect(race).toEqual({
        race: {
          id: expect.any(Number),
          grandPrixName: expect.any(String),
          circuitId: expect.any(Number),
          date: expect.any(Date),
        },
        driver: {
          firstName: "Lando",
          lastName: "Norris",
        },
      });
    });
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

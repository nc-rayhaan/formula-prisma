import {
  getBritishDrivers,
  getEngineProviders,
  getRaceResultByRaceId,
  getTeamsByEngineProvider,
} from "../sprint";

describe("getEngineProviders(", () => {
  test("returns a list of engine providers", async () => {
    const engineProviders = await getEngineProviders();
    expect(engineProviders).toEqual([
      { id: 1, name: "Mercedes" },
      { id: 2, name: "Ferrari" },
      { id: 3, name: "Renault" },
      { id: 4, name: "Honda" },
    ]);
  });
});

describe("getTeamsByEngineProvider", () => {
  test("returns a list of teams that use a specific engine provider", async () => {
    const teamsWithMercedesEngines = await getTeamsByEngineProvider(1);
    const teamsWithFerrariEngines = await getTeamsByEngineProvider(2);
    expect(teamsWithMercedesEngines).toEqual([
      {
        id: 1,
        name: "Mercedes-AMG Petronas Formula One Team",
        base: "Brackley, United Kingdom",
        principal: "Toto Wolff",
        engineProviderId: 1,
      },
      {
        id: 5,
        name: "McLaren F1 Team",
        base: "Woking, United Kingdom",
        principal: "Andrea Stella",
        engineProviderId: 1,
      },
      {
        id: 6,
        name: "Aston Martin Aramco Cognizant Formula One Team",
        base: "Silverstone, United Kingdom",
        principal: "Mike Krack",
        engineProviderId: 1,
      },
      {
        id: 9,
        name: "Williams Racing",
        base: "Grove, United Kingdom",
        principal: "James Vowles",
        engineProviderId: 1,
      },
    ]);

    expect(teamsWithFerrariEngines).toEqual([
      {
        id: 2,
        name: "Scuderia Ferrari",
        base: "Maranello, Italy",
        principal: "Frédéric Vasseur",
        engineProviderId: 2,
      },
      {
        id: 7,
        name: "Stake F1 Team Kick Sauber",
        base: "Hinwil, Switzerland",
        principal: "Alessandro Alunni Bravi",
        engineProviderId: 2,
      },
      {
        id: 8,
        name: "MoneyGram Haas F1 Team",
        base: "Kannapolis, United States",
        principal: "Ayao Komatsu",
        engineProviderId: 2,
      },
    ]);
  });
});

describe("getBritishDrivers", () => {
  test("returns a list of british drivers", async () => {
    const britishDrivers = await getBritishDrivers();

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

describe("getRaceResultByRaceId", () => {
  test("returns race results by provided raceId", async () => {
    const silverstoneResults = await getRaceResultByRaceId(1);

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

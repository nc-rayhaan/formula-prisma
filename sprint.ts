import { Driver, EngineProvider, PrismaClient, Team } from "@prisma/client";
import { RaceResultType } from "./types";

const prisma = new PrismaClient();

export async function getEngineProviders(): Promise<EngineProvider[]> {
  // Query the database and return all of the engine providers

  // Please delete the below return statement and replace with your Prisma logic
  return [];
}

export async function getBritishDrivers(): Promise<Driver[]> {
  // Query the database and return all drivers whose nationality is British

  // Please delete the below return statement and replace with your Prisma logic
  return [];
}

export async function getTeamsByEngineProvider(engineProviderId: number) {
  // This function should return all teams who use a particular engine provider. This should also include all the information about the engine provider

  // Please delete the below return statement and replace with your Prisma logic
  return [];
}

export async function getRacesWonByDriver(driverId: number) {
  // This function should return races won by a chosen driver using the passed in driverId. The result should contain the race information along with the driver's first and last names

  // Please delete the below return statement and replace with your Prisma logic
  return [];
}

export async function calculateTotalPointsByDriver(
  driverId: number
): Promise<number> {
  // This function should return the total number of points scored by a chosen driver from all races. How will you ensure that TypeScript is satisfied that a number is returned in all cases?

  // Please delete the below return statement and replace with your Prisma logic
  return 0;
}

export async function getRaceResultByRaceId(
  raceId: number
): Promise<RaceResultType> {
  // This function takes a race id as an argument and returns the name of the grand prix, information about the circuit and the podium (position 1, 2 and 3) from that race. Please have a look at the test to see the structure of the expected returned object

  // Please delete the below return statement and replace with your Prisma logic
  return {
    grandPrixName: "",
    circuit: {
      id: 0,
      name: "",
      location: "",
    },
    raceResults: [],
  };
}

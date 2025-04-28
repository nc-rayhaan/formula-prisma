import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 1: Create a function that returns all of the engine providers

export async function getEngineProviders() {}

// 2: Write a function that takes an engineProviderId as an argument and returns all the teams that use that specific engine.

export async function getTeamsByEngineProvider() {}

// 3: Write a function that returns all drivers whose nationality is British

export async function getBritishDrivers() {}

/* 4: Write a function that will take a race id as an argument and returns the name of the grand prix, information about the circuit and the podium (position 1, 2 and 3) from that race. Please have a look at the test to see the structure of the expected returned object
 */
export async function getRaceResultByRaceId() {}

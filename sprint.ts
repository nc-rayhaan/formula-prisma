import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// 1: Create a function that logs all of the engine providers

// 2: Now that you can see all the engine provider ids, write a function that takes an engineProviderId as an argument and logs all the teams that use that specific engine.

// 3: Write a function that logs all drivers whose nationality is British

/* 4: Write a function that will take a race id as an argument and logs the name of the grand prix as well as the podium (position 1, 2 and 3) from that race. The returned object should have the following structure:

{
 grandPrixName,
 raceResults: [
    {
     position: 1, 
     driver {
      firstName,
      lastName,
      currentTeam: {
         name
      }
     }
    }
    ... other 2 race results
 ]
}
*/

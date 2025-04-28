import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed Engine Providers
  const mercedesEngine = await prisma.engineProvider.create({
    data: {
      name: "Mercedes",
    },
  });

  const ferrariEngine = await prisma.engineProvider.create({
    data: {
      name: "Ferrari",
    },
  });

  const renaultEngine = await prisma.engineProvider.create({
    data: {
      name: "Renault",
    },
  });

  const hondaEngine = await prisma.engineProvider.create({
    data: {
      name: "Honda",
    },
  });

  // Seed Teams
  const mercedesTeam = await prisma.team.create({
    data: {
      name: "Mercedes-AMG Petronas Formula One Team",
      base: "Brackley, United Kingdom",
      principal: "Toto Wolff",
      engineProviderId: mercedesEngine.id,
    },
  });

  const ferrariTeam = await prisma.team.create({
    data: {
      name: "Scuderia Ferrari",
      base: "Maranello, Italy",
      principal: "Frédéric Vasseur",
      engineProviderId: ferrariEngine.id,
    },
  });

  const alpineTeam = await prisma.team.create({
    data: {
      name: "BWT Alpine F1 Team",
      base: "Enstone, United Kingdom",
      principal: "Bruno Famin",
      engineProviderId: renaultEngine.id,
    },
  });

  const redBullTeam = await prisma.team.create({
    data: {
      name: "Oracle Red Bull Racing",
      base: "Milton Keynes, United Kingdom",
      principal: "Christian Horner",
      engineProviderId: hondaEngine.id,
    },
  });

  const mcLarenTeam = await prisma.team.create({
    data: {
      name: "McLaren F1 Team",
      base: "Woking, United Kingdom",
      principal: "Andrea Stella",
      engineProviderId: mercedesEngine.id,
    },
  });

  const astonMartinTeam = await prisma.team.create({
    data: {
      name: "Aston Martin Aramco Cognizant Formula One Team",
      base: "Silverstone, United Kingdom",
      principal: "Mike Krack",
      engineProviderId: mercedesEngine.id,
    },
  });

  const kickSauberTeam = await prisma.team.create({
    data: {
      name: "Stake F1 Team Kick Sauber",
      base: "Hinwil, Switzerland",
      principal: "Alessandro Alunni Bravi",
      engineProviderId: ferrariEngine.id,
    },
  });

  const haasTeam = await prisma.team.create({
    data: {
      name: "MoneyGram Haas F1 Team",
      base: "Kannapolis, United States",
      principal: "Ayao Komatsu",
      engineProviderId: ferrariEngine.id,
    },
  });

  const williamsTeam = await prisma.team.create({
    data: {
      name: "Williams Racing",
      base: "Grove, United Kingdom",
      principal: "James Vowles",
      engineProviderId: mercedesEngine.id,
    },
  });

  const visaRBTeam = await prisma.team.create({
    data: {
      name: "Visa Cash App RB Formula One Team",
      base: "Faenza, Italy",
      principal: "Laurent Mekies",
      engineProviderId: hondaEngine.id,
    },
  });

  // Seed Drivers
  const lewisHamilton = await prisma.driver.create({
    data: {
      firstName: "Lewis",
      lastName: "Hamilton",
      nationality: "British",
      dateOfBirth: new Date("1985-01-07"),
      points: 4865,
      championships: 7,
      teamId: mercedesTeam.id,
    },
  });

  const maxVerstappen = await prisma.driver.create({
    data: {
      firstName: "Max",
      lastName: "Verstappen",
      nationality: "Dutch",
      dateOfBirth: new Date("1997-09-30"),
      points: 3088,
      championships: 3,
      teamId: redBullTeam.id,
    },
  });

  const charlesLeclerc = await prisma.driver.create({
    data: {
      firstName: "Charles",
      lastName: "Leclerc",
      nationality: "Monégasque",
      dateOfBirth: new Date("1997-10-16"),
      points: 1085,
      championships: 0,
      teamId: ferrariTeam.id,
    },
  });

  const landoNorris = await prisma.driver.create({
    data: {
      firstName: "Lando",
      lastName: "Norris",
      nationality: "British",
      dateOfBirth: new Date("1999-11-13"),
      points: 596,
      championships: 0,
      teamId: mcLarenTeam.id,
    },
  });

  const georgeRussell = await prisma.driver.create({
    data: {
      firstName: "George",
      lastName: "Russell",
      nationality: "British",
      dateOfBirth: new Date("1998-02-15"),
      points: 421,
      championships: 0,
      teamId: mercedesTeam.id,
    },
  });

  const sergioPerez = await prisma.driver.create({
    data: {
      firstName: "Sergio",
      lastName: "Pérez",
      nationality: "Mexican",
      dateOfBirth: new Date("1990-01-26"),
      points: 1462,
      championships: 0,
      teamId: redBullTeam.id,
    },
  });

  const fernandoAlonso = await prisma.driver.create({
    data: {
      firstName: "Fernando",
      lastName: "Alonso",
      nationality: "Spanish",
      dateOfBirth: new Date("1981-07-29"),
      points: 2411,
      championships: 2,
      teamId: astonMartinTeam.id,
    },
  });

  const carlosSainz = await prisma.driver.create({
    data: {
      firstName: "Carlos",
      lastName: "Sainz",
      nationality: "Spanish",
      dateOfBirth: new Date("1994-09-01"),
      points: 909,
      championships: 0,
      teamId: ferrariTeam.id,
    },
  });

  const estebanOcon = await prisma.driver.create({
    data: {
      firstName: "Esteban",
      lastName: "Ocon",
      nationality: "French",
      dateOfBirth: new Date("1996-09-17"),
      points: 382,
      championships: 0,
      teamId: alpineTeam.id,
    },
  });

  const pierreGasly = await prisma.driver.create({
    data: {
      firstName: "Pierre",
      lastName: "Gasly",
      nationality: "French",
      dateOfBirth: new Date("1996-02-07"),
      points: 413,
      championships: 0,
      teamId: alpineTeam.id,
    },
  });

  const valtteriBottas = await prisma.driver.create({
    data: {
      firstName: "Valtteri",
      lastName: "Bottas",
      nationality: "Finnish",
      dateOfBirth: new Date("1989-08-28"),
      points: 1795,
      championships: 0,
      teamId: kickSauberTeam.id,
    },
  });

  const oscarPiastri = await prisma.driver.create({
    data: {
      firstName: "Oscar",
      lastName: "Piastri",
      nationality: "Australian",
      dateOfBirth: new Date("2001-04-06"),
      points: 97,
      championships: 0,
      teamId: mcLarenTeam.id,
    },
  });

  const kevinMagnussen = await prisma.driver.create({
    data: {
      firstName: "Kevin",
      lastName: "Magnussen",
      nationality: "Danish",
      dateOfBirth: new Date("1992-10-05"),
      points: 183,
      championships: 0,
      teamId: haasTeam.id,
    },
  });

  const nicoHulkenberg = await prisma.driver.create({
    data: {
      firstName: "Nico",
      lastName: "Hülkenberg",
      nationality: "German",
      dateOfBirth: new Date("1987-08-19"),
      points: 530,
      championships: 0,
      teamId: haasTeam.id,
    },
  });

  const zhouGuanyu = await prisma.driver.create({
    data: {
      firstName: "Zhou",
      lastName: "Guanyu",
      nationality: "Chinese",
      dateOfBirth: new Date("1999-05-30"),
      points: 14,
      championships: 0,
      teamId: kickSauberTeam.id,
    },
  });

  const yukiTsunoda = await prisma.driver.create({
    data: {
      firstName: "Yuki",
      lastName: "Tsunoda",
      nationality: "Japanese",
      dateOfBirth: new Date("2000-05-11"),
      points: 53,
      championships: 0,
      teamId: visaRBTeam.id,
    },
  });

  const liamLawson = await prisma.driver.create({
    data: {
      firstName: "Liam",
      lastName: "Lawson",
      nationality: "New Zealander",
      dateOfBirth: new Date("2002-02-11"),
      points: 2,
      championships: 0,
      teamId: visaRBTeam.id,
    },
  });

  const alexanderAlbon = await prisma.driver.create({
    data: {
      firstName: "Alexander",
      lastName: "Albon",
      nationality: "Thai",
      dateOfBirth: new Date("1996-03-23"),
      points: 223,
      championships: 0,
      teamId: williamsTeam.id,
    },
  });

  const loganSargeant = await prisma.driver.create({
    data: {
      firstName: "Logan",
      lastName: "Sargeant",
      nationality: "American",
      dateOfBirth: new Date("2000-12-31"),
      points: 0,
      championships: 0,
      teamId: williamsTeam.id,
    },
  });

  const lanceStroll = await prisma.driver.create({
    data: {
      firstName: "Lance",
      lastName: "Stroll",
      nationality: "Canadian",
      dateOfBirth: new Date("1998-10-29"),
      points: 246,
      championships: 0,
      teamId: astonMartinTeam.id,
    },
  });

  const danielRicciardo = await prisma.driver.create({
    data: {
      firstName: "Daniel",
      lastName: "Ricciardo",
      nationality: "Australian",
      dateOfBirth: new Date("1989-07-01"),
      points: 1329,
      championships: 0,
      teamId: visaRBTeam.id,
    },
  });
  const oliverBearman = await prisma.driver.create({
    data: {
      firstName: "Oliver",
      lastName: "Bearman",
      nationality: "British",
      dateOfBirth: new Date("2005-05-08"),
      points: 7,
      championships: 0,
      teamId: haasTeam.id,
    },
  });
  const francoColapinto = await prisma.driver.create({
    data: {
      firstName: "Franco",
      lastName: "Colapinto",
      nationality: "Argentine",
      dateOfBirth: new Date("2003-05-27"),
      points: 5,
      championships: 0,
      teamId: williamsTeam.id,
    },
  });

  // Seed Circuits
  const silverstoneCircuit = await prisma.circuit.create({
    data: {
      name: "Silverstone Circuit",
      location: "Silverstone, United Kingdom",
    },
  });

  const monzaCircuit = await prisma.circuit.create({
    data: {
      name: "Monza Circuit",
      location: "Monza, Italy",
    },
  });

  const spaCircuit = await prisma.circuit.create({
    data: {
      name: "Circuit de Spa-Francorchamps",
      location: "Stavelot, Belgium",
    },
  });

  const yasMarinaCircuit = await prisma.circuit.create({
    data: {
      name: "Yas Marina Circuit",
      location: "Abu Dhabi, UAE",
    },
  });

  const suzukaCircuit = await prisma.circuit.create({
    data: {
      name: "Suzuka Circuit",
      location: "Suzuka, Japan",
    },
  });

  const marinaBayStreetCircuit = await prisma.circuit.create({
    data: {
      name: "Marina Bay Street Circuit",
      location: "Marina Bay, Singapore",
    },
  });

  const redBullRing = await prisma.circuit.create({
    data: {
      name: "Red Bull Ring",
      location: "Spielberg, Austria",
    },
  });

  const circuitDeMonaco = await prisma.circuit.create({
    data: {
      name: "Circuit de Monaco",
      location: "Monte Carlo, Monaco",
    },
  });

  const circuitGillesVilleneuve = await prisma.circuit.create({
    data: {
      name: "Circuit Gilles Villeneuve",
      location: "Montreal, Canada",
    },
  });

  const interlagosCircuit = await prisma.circuit.create({
    data: {
      name: "Interlagos Circuit",
      location: "Sao Paulo, Brazil",
    },
  });

  const circuitOfTheAmericas = await prisma.circuit.create({
    data: {
      name: "Circuit of the Americas",
      location: "Austin, United States",
    },
  });

  const hungaroringCircuit = await prisma.circuit.create({
    data: {
      name: "Hungaroring",
      location: "Mogyoród, Hungary",
    },
  });

  const bahrainInternationalCircuit = await prisma.circuit.create({
    data: {
      name: "Bahrain International Circuit",
      location: "Sakhir, Bahrain",
    },
  });

  const jeddahStreetCircuit = await prisma.circuit.create({
    data: {
      name: "Jeddah Street Circuit",
      location: "Jeddah, Saudi Arabia",
    },
  });

  const zandvoortCircuit = await prisma.circuit.create({
    data: {
      name: "Circuit Zandvoort",
      location: "Zandvoort, Netherlands",
    },
  });

  const barcelonaCircuit = await prisma.circuit.create({
    data: {
      name: "Circuit de Barcelona-Catalunya",
      location: "Montmelo, Spain",
    },
  });

  const imolaCircuit = await prisma.circuit.create({
    data: {
      name: "Autodromo Enzo e Dino Ferrari",
      location: "Imola, Italy",
    },
  });

  const melbourneCircuit = await prisma.circuit.create({
    data: {
      name: "Albert Park Circuit",
      location: "Melbourne, Australia",
    },
  });

  const miamiCircuit = await prisma.circuit.create({
    data: {
      name: "Miami International Autodrome",
      location: "Miami, United States",
    },
  });

  const lasVegasCircuit = await prisma.circuit.create({
    data: {
      name: "Las Vegas Street Circuit",
      location: "Las Vegas, United States",
    },
  });

  const losailCircuit = await prisma.circuit.create({
    data: {
      name: "Losail International Circuit",
      location: "Doha, Qatar",
    },
  });

  const shanghaiCircuit = await prisma.circuit.create({
    data: {
      name: "Shanghai International Circuit",
      location: "Shanghai, China",
    },
  });

  const azerbaijanCircuit = await prisma.circuit.create({
    data: {
      name: "Baku City Circuit",
      location: "Baku, Azerbaijan",
    },
  });

  const mexicoCircuit = await prisma.circuit.create({
    data: {
      name: "Autodromo Hermanos Rodriguez",
      location: "Mexico City, Mexico",
    },
  });

  // Seed Races
  const britishGP = await prisma.race.create({
    data: {
      grandPrixName: "British Grand Prix",
      circuitId: silverstoneCircuit.id,
      date: new Date("2024-07-07"),
    },
  });

  const italianGP = await prisma.race.create({
    data: {
      grandPrixName: "Italian Grand Prix",
      circuitId: monzaCircuit.id,
      date: new Date("2024-09-08"),
    },
  });

  const belgianGP = await prisma.race.create({
    data: {
      grandPrixName: "Belgian Grand Prix",
      circuitId: spaCircuit.id,
      date: new Date("2024-07-28"),
    },
  });

  const abuDhabiGP = await prisma.race.create({
    data: {
      grandPrixName: "Abu Dhabi Grand Prix",
      circuitId: yasMarinaCircuit.id,
      date: new Date("2024-12-08"),
    },
  });

  const japaneseGP = await prisma.race.create({
    data: {
      grandPrixName: "Japanese Grand Prix",
      circuitId: suzukaCircuit.id,
      date: new Date("2024-09-22"),
    },
  });

  const singaporeGP = await prisma.race.create({
    data: {
      grandPrixName: "Singapore Grand Prix",
      circuitId: marinaBayStreetCircuit.id,
      date: new Date("2024-09-15"),
    },
  });

  const austrianGP = await prisma.race.create({
    data: {
      grandPrixName: "Austrian Grand Prix",
      circuitId: redBullRing.id,
      date: new Date("2024-06-30"),
    },
  });

  const monacoGP = await prisma.race.create({
    data: {
      grandPrixName: "Monaco Grand Prix",
      circuitId: circuitDeMonaco.id,
      date: new Date("2024-05-26"),
    },
  });

  const canadianGP = await prisma.race.create({
    data: {
      grandPrixName: "Canadian Grand Prix",
      circuitId: circuitGillesVilleneuve.id,
      date: new Date("2024-06-09"),
    },
  });

  const brazilianGP = await prisma.race.create({
    data: {
      grandPrixName: "Brazilian Grand Prix",
      circuitId: interlagosCircuit.id,
      date: new Date("2024-11-17"),
    },
  });

  const usGP = await prisma.race.create({
    data: {
      grandPrixName: "United States Grand Prix",
      circuitId: circuitOfTheAmericas.id,
      date: new Date("2024-10-20"),
    },
  });

  const hungarianGP = await prisma.race.create({
    data: {
      grandPrixName: "Hungarian Grand Prix",
      circuitId: hungaroringCircuit.id,
      date: new Date("2024-07-21"),
    },
  });

  const bahrainGP = await prisma.race.create({
    data: {
      grandPrixName: "Bahrain Grand Prix",
      circuitId: bahrainInternationalCircuit.id,
      date: new Date("2024-03-03"),
    },
  });

  const saudiArabianGP = await prisma.race.create({
    data: {
      grandPrixName: "Saudi Arabian Grand Prix",
      circuitId: jeddahStreetCircuit.id,
      date: new Date("2024-03-17"),
    },
  });

  const dutchGP = await prisma.race.create({
    data: {
      grandPrixName: "Dutch Grand Prix",
      circuitId: zandvoortCircuit.id,
      date: new Date("2024-08-25"),
    },
  });

  const spanishGP = await prisma.race.create({
    data: {
      grandPrixName: "Spanish Grand Prix",
      circuitId: barcelonaCircuit.id,
      date: new Date("2024-06-23"),
    },
  });

  const emiliaRomagnaGP = await prisma.race.create({
    data: {
      grandPrixName: "Emilia Romagna Grand Prix",
      circuitId: imolaCircuit.id,
      date: new Date("2024-05-19"),
    },
  });

  const australianGP = await prisma.race.create({
    data: {
      grandPrixName: "Australian Grand Prix",
      circuitId: melbourneCircuit.id,
      date: new Date("2024-03-31"),
    },
  });

  const miamiGP = await prisma.race.create({
    data: {
      grandPrixName: "Miami Grand Prix",
      circuitId: miamiCircuit.id,
      date: new Date("2024-05-05"),
    },
  });

  const lasVegasGP = await prisma.race.create({
    data: {
      grandPrixName: "Las Vegas Grand Prix",
      circuitId: lasVegasCircuit.id,
      date: new Date("2024-11-23"),
    },
  });

  const qatarGP = await prisma.race.create({
    data: {
      grandPrixName: "Qatar Grand Prix",
      circuitId: losailCircuit.id,
      date: new Date("2024-10-06"),
    },
  });

  const chineseGP = await prisma.race.create({
    data: {
      grandPrixName: "Chinese Grand Prix",
      circuitId: shanghaiCircuit.id,
      date: new Date("2024-04-21"),
    },
  });

  const azerbaijanGP = await prisma.race.create({
    data: {
      grandPrixName: "Azerbaijan Grand Prix",
      circuitId: azerbaijanCircuit.id,
      date: new Date("2024-09-15"),
    },
  });

  const mexicanGP = await prisma.race.create({
    data: {
      grandPrixName: "Mexican Grand Prix",
      circuitId: mexicoCircuit.id,
      date: new Date("2024-10-27"),
    },
  });

  // Seed Race Results
  await prisma.raceResult.createMany({
    data: [
      {
        driverId: maxVerstappen.id,
        raceId: bahrainGP.id,
        position: 1,
        points: 26,
        gotFastestLap: true,
      },
      {
        driverId: sergioPerez.id,
        raceId: bahrainGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: bahrainGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: bahrainGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: bahrainGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: bahrainGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: bahrainGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: bahrainGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: bahrainGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: lanceStroll.id,
        raceId: bahrainGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: saudiArabianGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: saudiArabianGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: saudiArabianGP.id,
        position: 3,
        points: 16,
        gotFastestLap: true,
      },
      {
        driverId: oscarPiastri.id,
        raceId: saudiArabianGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: saudiArabianGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: saudiArabianGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: oliverBearman.id,
        raceId: saudiArabianGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: saudiArabianGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: saudiArabianGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: saudiArabianGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: australianGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: australianGP.id,
        position: 2,
        points: 19,
        gotFastestLap: true,
      },
      {
        driverId: landoNorris.id,
        raceId: australianGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: australianGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: australianGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: lanceStroll.id,
        raceId: australianGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: yukiTsunoda.id,
        raceId: australianGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: australianGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: australianGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: kevinMagnussen.id,
        raceId: australianGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: japaneseGP.id,
        position: 1,
        points: 26,
        gotFastestLap: true,
      },
      {
        driverId: sergioPerez.id,
        raceId: japaneseGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: japaneseGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: japaneseGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: japaneseGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: japaneseGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: japaneseGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: japaneseGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: japaneseGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: yukiTsunoda.id,
        raceId: japaneseGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: chineseGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: chineseGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: chineseGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: chineseGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: chineseGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: chineseGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: chineseGP.id,
        position: 7,
        points: 7,
        gotFastestLap: true,
      },
      {
        driverId: oscarPiastri.id,
        raceId: chineseGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: chineseGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: chineseGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: miamiGP.id,
        position: 1,
        points: 26,
        gotFastestLap: true,
      },
      {
        driverId: maxVerstappen.id,
        raceId: miamiGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: miamiGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: miamiGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: miamiGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: miamiGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: miamiGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: miamiGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: miamiGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: miamiGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: emiliaRomagnaGP.id,
        position: 1,
        points: 26,
        gotFastestLap: true,
      },
      {
        driverId: landoNorris.id,
        raceId: emiliaRomagnaGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: emiliaRomagnaGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: emiliaRomagnaGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: emiliaRomagnaGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: emiliaRomagnaGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: emiliaRomagnaGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: emiliaRomagnaGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: emiliaRomagnaGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: estebanOcon.id,
        raceId: emiliaRomagnaGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: monacoGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: monacoGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: monacoGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: monacoGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: monacoGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: monacoGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: monacoGP.id,
        position: 7,
        points: 6,
        gotFastestLap: true,
      },
      {
        driverId: yukiTsunoda.id,
        raceId: monacoGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: alexanderAlbon.id,
        raceId: monacoGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: monacoGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: canadianGP.id,
        position: 1,
        points: 26,
        gotFastestLap: true,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: canadianGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: canadianGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: canadianGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: canadianGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: canadianGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: canadianGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: canadianGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: estebanOcon.id,
        raceId: canadianGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: canadianGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: spanishGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: spanishGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: spanishGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: spanishGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: spanishGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: spanishGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: spanishGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: spanishGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: spanishGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: estebanOcon.id,
        raceId: spanishGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: austrianGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: austrianGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: austrianGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: austrianGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: austrianGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: austrianGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: austrianGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: kevinMagnussen.id,
        raceId: austrianGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: danielRicciardo.id,
        raceId: austrianGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: austrianGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: britishGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: britishGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: britishGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: britishGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: britishGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: britishGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: lanceStroll.id,
        raceId: britishGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: britishGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: alexanderAlbon.id,
        raceId: britishGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: yukiTsunoda.id,
        raceId: britishGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: hungarianGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: hungarianGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: hungarianGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: hungarianGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: hungarianGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: hungarianGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: hungarianGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: hungarianGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: yukiTsunoda.id,
        raceId: hungarianGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: lanceStroll.id,
        raceId: hungarianGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: belgianGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: belgianGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: belgianGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: belgianGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: belgianGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: belgianGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: belgianGP.id,
        position: 7,
        points: 6,
        gotFastestLap: true,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: belgianGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: estebanOcon.id,
        raceId: belgianGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: kevinMagnussen.id,
        raceId: belgianGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: dutchGP.id,
        position: 1,
        points: 26,
        gotFastestLap: true,
      },
      {
        driverId: maxVerstappen.id,
        raceId: dutchGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: dutchGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: dutchGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: dutchGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: dutchGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: dutchGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: dutchGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: dutchGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: dutchGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: italianGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: italianGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: italianGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: italianGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: italianGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: italianGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: italianGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: italianGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: italianGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: estebanOcon.id,
        raceId: italianGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: azerbaijanGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: azerbaijanGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: azerbaijanGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: azerbaijanGP.id,
        position: 4,
        points: 13,
        gotFastestLap: true,
      },
      {
        driverId: maxVerstappen.id,
        raceId: azerbaijanGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: azerbaijanGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: alexanderAlbon.id,
        raceId: azerbaijanGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: francoColapinto.id,
        raceId: azerbaijanGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: azerbaijanGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: oliverBearman.id,
        raceId: azerbaijanGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: singaporeGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: singaporeGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: singaporeGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: singaporeGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: singaporeGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: singaporeGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: singaporeGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: singaporeGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: singaporeGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: singaporeGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: usGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: usGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: usGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: usGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: usGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: usGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: usGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: usGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: liamLawson.id,
        raceId: usGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: francoColapinto.id,
        raceId: usGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: mexicanGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: mexicanGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: mexicanGP.id,
        position: 3,
        points: 16,
        gotFastestLap: true,
      },
      {
        driverId: lewisHamilton.id,
        raceId: mexicanGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: mexicanGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: mexicanGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: kevinMagnussen.id,
        raceId: mexicanGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: mexicanGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: mexicanGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: mexicanGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: brazilianGP.id,
        position: 1,
        points: 26, // 25 for position + 1 for fastest lap
        gotFastestLap: true,
      },
      {
        driverId: estebanOcon.id,
        raceId: brazilianGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: brazilianGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: brazilianGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: brazilianGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: brazilianGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: yukiTsunoda.id,
        raceId: brazilianGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: brazilianGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: liamLawson.id,
        raceId: brazilianGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: brazilianGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: lasVegasGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: lasVegasGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: lasVegasGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: lasVegasGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: lasVegasGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: lasVegasGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: lasVegasGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: lasVegasGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: yukiTsunoda.id,
        raceId: lasVegasGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: sergioPerez.id,
        raceId: lasVegasGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: qatarGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: qatarGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: qatarGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: qatarGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: qatarGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: qatarGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: qatarGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: zhouGuanyu.id,
        raceId: qatarGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: kevinMagnussen.id,
        raceId: qatarGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: landoNorris.id,
        raceId: qatarGP.id,
        position: 10,
        points: 1,
        gotFastestLap: true,
      },
      {
        driverId: landoNorris.id,
        raceId: abuDhabiGP.id,
        position: 1,
        points: 25,
        gotFastestLap: false,
      },
      {
        driverId: carlosSainz.id,
        raceId: abuDhabiGP.id,
        position: 2,
        points: 18,
        gotFastestLap: false,
      },
      {
        driverId: charlesLeclerc.id,
        raceId: abuDhabiGP.id,
        position: 3,
        points: 15,
        gotFastestLap: false,
      },
      {
        driverId: lewisHamilton.id,
        raceId: abuDhabiGP.id,
        position: 4,
        points: 12,
        gotFastestLap: false,
      },
      {
        driverId: georgeRussell.id,
        raceId: abuDhabiGP.id,
        position: 5,
        points: 10,
        gotFastestLap: false,
      },
      {
        driverId: maxVerstappen.id,
        raceId: abuDhabiGP.id,
        position: 6,
        points: 8,
        gotFastestLap: false,
      },
      {
        driverId: pierreGasly.id,
        raceId: abuDhabiGP.id,
        position: 7,
        points: 6,
        gotFastestLap: false,
      },
      {
        driverId: nicoHulkenberg.id,
        raceId: abuDhabiGP.id,
        position: 8,
        points: 4,
        gotFastestLap: false,
      },
      {
        driverId: fernandoAlonso.id,
        raceId: abuDhabiGP.id,
        position: 9,
        points: 2,
        gotFastestLap: false,
      },
      {
        driverId: oscarPiastri.id,
        raceId: abuDhabiGP.id,
        position: 10,
        points: 1,
        gotFastestLap: false,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import oc from 'open-color';
import ocx from './opencolor-ex';

export type ThemeColors = {
  // Background
  background: string;

  // Water
  water: string;
  lakeRiverLine: string;
  coastline: string;
  seaRoute: string;

  // Landforma (Terrain/Land Cover)
  landformaGreen: string;
  landformaBlue: string;
  landformaYellow: string;
  landformaDefault: string;

  // Contour Lines
  contourMain: string;
  contourThin: string;

  // Structure (General)
  structurel: string;
  wstructurea: string;
  buildingFill: string;
  buildingOutline: string;

  // Roads
  roadExpressway: string;
  roadNational: string;
  roadPrefectural: string;
  roadFillExpressway: string;
  roadFillNational: string;
  roadFillPrefectural: string;
  roadFillDefault: string;
  footway: string;
  roadNoLabel: string;

  // Railways
  railway: string;
  railwaySecondary: string;
  station: string;
  stationRailState: string;

  // Boundaries
  boundaryCountry: string;
  boundaryDefault: string;

  // Labels (Text, Icons)
  labelDefault: string;
  greenLabel: string;
  blueLabel: string;
  halo: string;
};

export const colors: Record<string, ThemeColors> = {
  light: {
    // Background
    background: oc.white,

    // Water
    water: oc.blue[1],
    lakeRiverLine: oc.blue[2],
    coastline: oc.indigo[9],
    seaRoute: "#bbbbd7", // やや青みがかったグレー。open-colorになし

    // Landforma (Terrain/Land Cover)
    landformaGreen: oc.green[0],
    landformaBlue: oc.indigo[0],
    landformaYellow: oc.yellow[0],
    landformaDefault: oc.gray[0],

    // Contour Lines
    contourMain: ocx.brown[4],
    contourThin: ocx.brown[3],

    // Structure (General)
    structurel: oc.gray[5],
    wstructurea: oc.white,
    buildingFill: oc.gray[1],
    buildingOutline: oc.gray[4],

    // Roads
    roadExpressway: oc.teal[5],
    roadNational: oc.orange[5],
    roadPrefectural: oc.yellow[5],
    roadFillExpressway: oc.green[2],
    roadFillNational: oc.orange[2],
    roadFillPrefectural: oc.yellow[2],
    roadFillDefault: oc.white,
    footway: ocx.brown[7],
    roadNoLabel: oc.white,

    // Railways
    railway: oc.gray[8],
    railwaySecondary: oc.gray[7],
    station: oc.red[9],
    stationRailState: oc.red[4],

    // Boundaries
    boundaryCountry: oc.grape[6],
    boundaryDefault: oc.gray[3],

    // Labels (Text, Icons)
    labelDefault: oc.gray[9],
    greenLabel: oc.green[8],
    blueLabel: oc.indigo[7],
    halo: oc.white,
  },
  dark: {
    // Background
    background: oc.black,

    // Water
    water: oc.blue[9],
    lakeRiverLine: oc.blue[7],
    coastline: oc.indigo[2],
    seaRoute: "#444467", // やや青みがかったグレー。open-colorになし

    // Landforma (Terrain/Land Cover)
    landformaGreen: oc.green[9],
    landformaBlue: oc.indigo[9],
    landformaYellow: oc.yellow[9],
    landformaDefault: oc.gray[8],

    // Contour Lines
    contourMain: ocx.brown[5],
    contourThin: ocx.brown[6],

    // Structure (General)
    structurel: oc.gray[5],
    wstructurea: oc.gray[9],
    buildingFill: oc.gray[8],
    buildingOutline: oc.gray[6],

    // Roads
    roadExpressway: oc.teal[5],
    roadNational: oc.orange[5],
    roadPrefectural: oc.yellow[5],
    roadFillExpressway: oc.green[8],
    roadFillNational: oc.orange[8],
    roadFillPrefectural: oc.yellow[8],
    roadFillDefault: oc.gray[9],
    footway: ocx.brown[4],
    roadNoLabel: oc.white,

    // Railways
    railway: oc.gray[3],
    railwaySecondary: oc.gray[4],
    station: oc.red[5],
    stationRailState: oc.red[7],

    // Boundaries
    boundaryCountry: oc.grape[5],
    boundaryDefault: oc.gray[6],

    // Labels (Text, Icons)
    labelDefault: oc.gray[1],
    greenLabel: oc.green[4],
    blueLabel: oc.indigo[4],
    halo: oc.black,
  },
};

export type ColorTheme = typeof colors;

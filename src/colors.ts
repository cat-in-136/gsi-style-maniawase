import oc from 'open-color';
import ocx from './opencolor-ex';

export const colors = {
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
  buildingFill: oc.gray[1],
  buildingOutline: oc.gray[4],

  // Roads
  roadExpressway: oc.teal[5],
  roadNational: oc.orange[5],
  roadPrefectural: oc.yellow[5],
  roadFillExpressway: oc.green[2],
  roadFillNational: oc.orange[2],
  roadFillPrefectural: oc.yellow[2],
  footway: ocx.brown[7],

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
  white: oc.white,
};

export type Colors = typeof colors;

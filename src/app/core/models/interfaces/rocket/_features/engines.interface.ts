export interface Engines {
  isp: {
    sea_level: number;
    vacuum: number;
  };
  thrust_sea_level: {
    kN: number;
    lbf: number;
  };
  thrust_vacuum: {
    kN: number;
    lbf: number;
  };
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
};
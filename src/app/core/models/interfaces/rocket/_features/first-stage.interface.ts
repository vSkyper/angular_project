export interface FirstStage {
  thrust_sea_level: {
    kN: number;
    lbf: number;
  };
  thrust_vacuum: {
    kN: number;
    lbf: number;
  };
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}
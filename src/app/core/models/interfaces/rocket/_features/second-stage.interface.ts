export interface SecondStage{
  thrust: {
    kN: number;
    lbf: number;
  };
  payloads: {
    composite_fairing: {
      height: {
        meters: number;
        feet: number;
      };
      diameter: {
        meters: number;
        feet: number;
      };
    };
    option_1: string;
  };
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}
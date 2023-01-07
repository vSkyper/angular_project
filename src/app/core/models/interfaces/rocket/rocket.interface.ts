import { Engines } from "./_features/engines.interface";
import { FirstStage } from "./_features/first-stage.interface";
import { PayloadWeights } from "./_features/payload-weights.interface";
import { SecondStage } from "./_features/second-stage.interface";

export interface Rocket {
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: {
    number: number;
    material: string;
  };
  payload_weights: PayloadWeights[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}
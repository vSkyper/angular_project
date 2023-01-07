import { Cores } from "./_features/cores.interface";
import { Fairings } from "./_features/fairings.interface";
import { Links } from "./_features/links.interface";

export interface LatestLaunchCrewMember {
  crew: string;
  role: string;
}

export const _latestLaunchCrewMember: LatestLaunchCrewMember = {
  crew: '',
  role: '',
};

export interface LatestLaunch {
  fairings: Fairings;
  links: Links;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: {
    time: number;
    altitude: number;
    reason: number;
  }[];
  details: string;
  crew: LatestLaunchCrewMember[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: Cores[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  id: string;
}
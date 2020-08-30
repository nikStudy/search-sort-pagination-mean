import { Timestamp } from 'rxjs';

export interface UserData {
    gender: string;
    name: {first: string};
    email: string;
    dob: {date: Date};
    picture: {medium: string};
  }
  
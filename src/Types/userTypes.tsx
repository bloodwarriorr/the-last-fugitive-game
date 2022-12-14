import React from "react";

export interface UserSignupType {
  nickname: string;
  email: string;
  password: string;
  avatarCode: number;
  avatarUrl: string;
  gender: number;
  id?: string;
}

export interface UserLoginType {
  email: string;
  password: string;
}
export interface UserType {
  _id: string;
  nickname: string;
  email: string;
  password: string;
  current_level: number;
  level_rank: LevelRankType[];
  avatarCode: number;
  avatarUrl: string;
  gender: number;
  is_notification: boolean;
  time_of_register: Date;
  play_dates: PlayDatesType[];
  token: string;
  isActive:boolean
}

export interface LevelRankType {
  level_code: number;
  rank: number;
  popularity: number;
}

export interface PlayDatesType {
  start_date: Date | null;
  end_date: Date | null;
}
export interface AvatarOptionsType {
  code: number;
  url: string;
}
export interface AvatarsGenderType {}
export interface AvatarsType {
  _id: string;
  gender: string;
  options: AvatarOptionsType[];
}
export interface RemainingGamesType {
  max: number;
  current: number;
}
export interface LifesObjectType {
  user: number;
  guest: number;
}
export interface UserContextType {
  currentUser: UserType;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType>>;
  avatars: AvatarsType[];
  setAvatars: React.Dispatch<React.SetStateAction<AvatarsType[]>>;
  isRegisteredUser: boolean;
  setIsRegisteredUser: React.Dispatch<React.SetStateAction<boolean>>;
  isGuest: boolean;
  setIsGuest: React.Dispatch<React.SetStateAction<boolean>>;
  remainingGames: RemainingGamesType | undefined;
  setRemainingGames: React.Dispatch<React.SetStateAction<RemainingGamesType | undefined>>;
  lifesObject: LifesObjectType;
  setLifesObject: React.Dispatch<React.SetStateAction<LifesObjectType>>;
}

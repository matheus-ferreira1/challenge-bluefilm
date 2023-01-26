export interface BannerMovieTypes {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}

export interface MovieDataTypes {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string | null;
  poster_path: string | null;
}

export interface ActorTypes {
  id: number;
  name: string;
  profile_path: string;
  known_for: MovieDataTypes[];
  known_for_department: string;
}

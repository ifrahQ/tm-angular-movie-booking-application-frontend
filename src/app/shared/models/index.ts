export interface Movie {
  id?: number;
  name: string;
  duration: number;
  description: string;
  release_date?: string;
  released: boolean;
  rating: number;
  theatres: number[];
}

export interface Theatre {
  id?: number;
  name: string;
  ticket_price: number;
}

export interface Booking {
  movieId: number;
  movie: string;
  theatreId: number;
  theatre: string;
  price: number;
  qty: number;
}
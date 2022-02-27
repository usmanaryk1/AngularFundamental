
  export interface Passenger {
    id: number,
    fullname: string,
    checkedIn: boolean,
    checkInDate?: number, // | null, =>angular not set a null value in template driven form) so make it optional with ?
    baggage: string
  }


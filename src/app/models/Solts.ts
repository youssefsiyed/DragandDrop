export interface Solts { 

    id: number,
    name: string,
    day: string,
    from: number,
    to: number,
    room: {
        id: string,
        name: string,
        capacity: number,
        setup: string,
        recorded: string
          }
}
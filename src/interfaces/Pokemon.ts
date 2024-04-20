export default interface Pokemon {
    id?: number,
    name?: string,
    sprites?: {
        front_default: string,
        back_default: string,
    },
    weight?: number,
}

type Sprites = {
    front_default: string,
    back_default: string,
}
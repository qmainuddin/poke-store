import { EntityId } from "@reduxjs/toolkit";

export default interface Pokemon {
    id: number | EntityId,
    name: string,
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
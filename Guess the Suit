import { Contract, Global } from '@algorandfoundation/algorand-typescript'

export class GuessSuit extends Contract {
  pick(suit: string): string {
    const suits = ["hearts", "clubs", "spades", "diamonds"]
    return suit === suits[Number(Global.round % 4)] ? "correct" : "wrong"
  }
}

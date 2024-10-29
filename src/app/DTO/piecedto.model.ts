export class Piecedto {
  namePiece?:string;
  description?:string;
  price?:number;
  supplier?:string;
  pieceState?: string; // État de la pièce (par exemple, 'vendu', 'en stock')
  quantity?: number; // Quantité disponible

  constructor(pieceState?: string, quantity?: number , description?:string,
    price?:number ,
    supplier?:string,  namePiece?:string) {
      this.namePiece=namePiece;
      this.supplier=supplier;
      this.price=price;
      this.description=description;
    this.pieceState = pieceState;
    this.quantity = quantity;
  }
}
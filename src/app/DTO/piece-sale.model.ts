export interface PieceSale {
saleDate: string|number|Date;
antecedentId:string;
quantitySold: any;
  id: number;
  client: string;
  clientCin: string;
  interventionDate: string;
  interventionNature: string;
  technician: string;
  purchaseNumber: number;
  pieceId: number;
  result: 'SUCCESS' | 'FAILURE';
  observation: string;
 /* clientCin: string;
  purchaseNumber: number;
  piece: {
    // Définir les champs du modèle Piece ici si nécessaire
  };
  saleDate: string; // Utiliser 'string' si la date est au format ISO string
  quantitySold: number;
  antecedentId: string;
  purchaseCount: number;
  historyTrees: any[]; // Définir le modèle HistoryTree si vous avez*/
}
  
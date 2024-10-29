export interface PieceChangeLog {
    pieceId: number;
    changeType: string;
    oldValue: string;
    newValue: string;
    changeDate: string; // Assurez-vous que le format correspond à ce que vous recevez du backend
  }
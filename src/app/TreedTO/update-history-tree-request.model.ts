export interface UpdateHistoryTreeRequest {
    clientCin: string;
    purchaseNumber: number;
    emplacementSource: string;
    reperationDate: string; // Format ISO (e.g., 'YYYY-MM-DD')
    emplacementDestination: string;
    status: string;
    observation: string;
  }
  
export interface InterventionHistorydto {
  Last_id: string;
  client: string;
  clientCin: string;
  interventionDate: string;  // Format ISO string
  interventionNature: 'To_Repair' | 'To_Replace';  // Utilisation des valeurs énumérées
  technician: string;
  purchaseNumber: number;
  result: 'Functional' | 'Non_Functional';  // Valeurs énumérées
  observation: string;
  namePiece: string;
  antecedentId: string;
  quantitySold: number;
}

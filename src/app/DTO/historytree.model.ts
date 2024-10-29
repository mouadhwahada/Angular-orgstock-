export interface InterventionHistorydto {
    emplacementDestination:string;
    emplacementSource: string;
    identifiantAntecedent: string;
    technician: string;
    reperationDate:Date;
    pieceId: number;
    status: ' Functional' | 'Non_Functional'; // Replace with your actual enum values
    observation: 'Defective_to_be_checked'| 'Successful_repair' | 'Repair_Completed_tested_ok';
  }
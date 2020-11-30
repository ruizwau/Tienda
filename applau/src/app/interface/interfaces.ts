

    export interface CuentasCorrientes {
        Entities: Entity[];
        IsValid: boolean;
        Message?: any;
      }
      export interface Entity {
        ReceiptDate: string;
        ReceiptDateFormat: string;
        ReceiptNumber?: string;
        ReceiptType: string;}
    

export interface Clientes {
    Entities: EntityCliente[];
    IsValid: boolean;
    Message?: any;
  }
  export interface EntityCliente {
    ClientId: number;
    Name: string;
    Code: string;
    Posnets: Posnet[];
  }
  
  export interface Posnet {
    PosnetId: number;
    Number: string;
  }


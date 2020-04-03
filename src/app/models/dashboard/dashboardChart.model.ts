export interface IDashboardChart{
    id: string,
    email: string;
    entregues: number;
    naoEntregues: number;
    andamento: number;

    emDias: number;
    emAtraso: number;

    satisfeito: number;
    neutro: number;
    insatisfeito: number;
}
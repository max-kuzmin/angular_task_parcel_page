import { ParcelSubtype } from './ParcelSubtype';

export class ParcelType {
    id: string;
    name: string;
    isInternational: boolean;
    maxWeight: number;
    subtypes: ParcelSubtype[];
}

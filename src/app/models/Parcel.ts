import { ITrackingNumberFieldValues } from '../tracking-number-field/tracking-number-field.component';
import { IWeightFieldValues } from '../weight-field/weight-field.component';
import { IParcelTypeFieldValues } from '../parcel-type-field/parcel-type-field.component';
import { IIndexFieldValues } from '../index-field/index-field.component';
import { IRecipientFieldValues } from '../recipient-field/recipient-field.component';

export class Parcel {
    trackingNumber: ITrackingNumberFieldValues;
    weight: IWeightFieldValues;
    parcelType: IParcelTypeFieldValues;
    index: IIndexFieldValues;
    recipient: IRecipientFieldValues;
}
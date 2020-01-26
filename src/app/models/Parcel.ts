import { TrackingNumberFieldValues } from '../tracking-number-field/tracking-number-field.component';
import { WeightFieldValues } from '../weight-field/weight-field.component';
import { ParcelTypeFieldValues } from '../parcel-type-field/parcel-type-field.component';
import { IndexFieldValues } from '../index-field/index-field.component';
import { RecipientFieldValues } from '../recipient-field/recipient-field.component';

export class Parcel {
    trackingNumber: TrackingNumberFieldValues;
    weight: WeightFieldValues;
    parcelType: ParcelTypeFieldValues;
    index: IndexFieldValues;
    recipient: RecipientFieldValues;
}

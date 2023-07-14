import DetailOne from '../form/components/details/DetailOne';
import DetailTwo from '../form/components/details/DetailTwo'
import DetailThree from '../form/components/details/DetailThree'

export default function DetailControl({ step }) {
    switch (step) {
        case 0:
            return <DetailOne />;
        case 1:
            return <DetailTwo />;
        case 2:
            return <DetailThree />;
        default:
            return null;
    }
}
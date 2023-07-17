import Image from 'next/image'
import styles from './details.module.css'

// Images
import TeamFlying from '../../../public/team-flying.svg'
import PaperBoat from '../../../public/paper-boat.svg'
import Trade from '../../../public/internacional-trade.svg'


export default function DetailControl({ step }) {
    switch (step) {
        case 0:
            return <Image src={TeamFlying} alt='Team Flying Image' width={380} className={styles.DetailImage}/>;
        case 1:
            return <Image src={PaperBoat} alt='Team in Paper Boat' width={360} className={styles.DetailTwo}/>;
        case 2:
            return <Image src={Trade} alt='International Trade Image' width={380} className={styles.DetailThree} />;
        default:
            return null;
    }
}
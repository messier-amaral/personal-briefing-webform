import Image from 'next/image';
import styles from './details.module.css';

// Detail Image
import TeamFlying from '../../../../../public/team-flying.svg'

export default function DetailOne() {
    return (
        <div>
            <h2 className={styles.MotivationTitle}>Empresas orientadas por propósitos alavancam significativamente</h2>
            <Image 
                src={TeamFlying}
                alt='Team Flying Image'
                width={380}
                className={styles.DetailImage}
            />
        </div>
    )
}
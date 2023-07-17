import styles from './details.module.css'
import utilStyles from '../../../styles/utils.module.css'

export default function DetailControl({ step }) {
    switch (step) {
        case 0:
            return <h2 className={styles.Title} >Empresas orientadas por propósitos alavancam significativamente</h2>
        case 1:
            return <h2 className={styles.Title} id={utilStyles.PurpleColor} >Navegue em águas desconhecidas e deixe sua marca registrada nas mentes e corações</h2>
        case 2:
            return <h2 className={styles.Title} >Empreender não se resume apenas a criar, mas, acima de tudo, a compreender.</h2>
        default:
            return null;
    }
}
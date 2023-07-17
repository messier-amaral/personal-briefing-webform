import styles from './styles/step.module.css'

// Icons
import { PiBuildingsBold, PiPencilCircleDuotone } from 'react-icons/pi'
import { HiOutlineUser } from 'react-icons/hi'
import { MdOutlineNavigateNext } from 'react-icons/md'

const Steps = ({currentStep}) => {
    return <div className={styles.Steps}>
        <div className={styles.StepActive}>
            <span className={styles.IconStepActive}>
                <PiBuildingsBold className={styles.IconsActive}/>
            </span>
            <span className={styles.TextStepActive}>
                <p className={styles.TitleActive}>Perfil Empresarial</p>
                <p className={styles.SubtitleActive}>Conhecendo a Empresa</p>
            </span>
            <span>
                <MdOutlineNavigateNext className={styles.NextStepActive} id={styles.FirstNextStep}/>
            </span>
        </div>
        
        <div className={currentStep >= 1 ? styles.StepActive : styles.Step}>
            <span className={currentStep >= 1 ? styles.IconStepActive : styles.IconStep}>
                <PiPencilCircleDuotone className={currentStep >= 1 ? styles.IconsActive : styles.Icons}/>
            </span>
            <span className={styles.TextStep}>
                <p className={currentStep >= 1 ? styles.TitleActive : styles.Title}>Detalhes do Projeto</p>
                <p className={styles.Subtitle}>Criando o Projeto</p>
            </span>
            <span>

            </span>
            <MdOutlineNavigateNext className={currentStep >= 1 ? styles.NextStepActive : styles.NextStep}/>
        </div>

        <div className={styles.Step}>
            <span className={currentStep >= 2 ? styles.IconStepActive : styles.IconStep}>
                <HiOutlineUser className={currentStep >= 2 ? styles.IconsActive : styles.Icons}/>
            </span>
            <span className={styles.TextStep}>
                <p className={currentStep >= 2 ? styles.TitleActive : styles.Title}>Contato</p>
                <p className={styles.Subtitle}>Entrando em Contato</p>
            </span>
            <span>

            </span>
            <MdOutlineNavigateNext className={currentStep >= 2 ? styles.NextStepActive : styles.NextStep} id={styles.LastNextStep}/>
        </div>
    </div>;
}

export default Steps;

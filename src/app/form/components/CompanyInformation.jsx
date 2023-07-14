import styles from './styles/stepPage.module.css';

// Components
import Input from './Input';
import TextArea from './TextArea';

export default function StepOne() {
    return (
        <div className={styles.FormControlStep}>
            <div className={styles.SmallInput}>
                <span className={styles.FirstInput}>
                    <Input text='Nome da Empresa' name='company_name' placeholder='Everest Studios' ClassName='SmallInput'/>
                </span>
                <span>
                    <Input text='Segmento da Empresa' name='company_segment' placeholder='Software Development' ClassName='SmallInput' />
                </span>
            </div>

            <Input text='Slogan da Empresa' name='company_slogan' placeholder='Desbrave o Cume da Inovação com a Everest Studios' />
            <Input text='Objetivo da Empresa' name='company_goal' placeholder='Impulsionar a excelência tecnológica, transformando ideias em soluções revolucionárias.' />
            <Input text='Público-alvo' name='target_audience' placeholder='Outras Empresas' />
            <Input text='Quais são os concorrentes e seus principais diferenciais?' name='rival_company' placeholder='Atlassian, novo principal diferencial é que estamos em diferentes areas do software' />

            <TextArea name='define_company' text='Defina seu Negócio' placeholder='Conta sobre sua empresa...' cols='70' rows='5' />

        </div>
    )
}
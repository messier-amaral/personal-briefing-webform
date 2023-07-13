import styles from './styles/stepPage.module.css';

// Components
import Input from './Input';
import TextArea from './TextArea';

export default function StepOne() {
    return (
        <div className={styles.FormControlStep}>
            <div className={styles.SmallInput}>
                <span className={styles.FirstInput}>
                    <Input type='text' text='Nome da Empresa' name='company_name' placeholder='Everest Studios' ClassName='SmallInput'/>
                </span>
                <span>
                    <Input type='text' text='Segmento da Empresa' name='company_segment' placeholder='Software Development' ClassName='SmallInput' />
                </span>
            </div>

            <Input type='text' text='Slogan da Empresa' name='company_slogan' placeholder='Desbrave o Cume da Inovação com a Everest Studios' />
            <Input type='text' text='Objetivo da Empresa' name='company_goal' placeholder='Impulsionar a excelência tecnológica, transformando ideias em soluções revolucionárias.' />
            <Input type='text' text='Público-alvo' name='target_audience' placeholder='Outras Empresas' />
            <Input type='text' text='Quais são os concorrentes e seus principais diferenciais?' name='rival_company' placeholder='Atlassian, novo principal diferencial é que estamos em diferentes areas do software' />

            <TextArea name='define_company' text='Defina seu Negócio' placeholder='Conta sobre sua empresa...' cols='70' rows='5' />

        </div>
    )
}
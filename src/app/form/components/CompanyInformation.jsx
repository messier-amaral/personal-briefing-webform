import styles from './styles/stepPage.module.css';

// Components
import Input from './Input';
import TextArea from './TextArea';

export default function StepOne({ onChange, formData}) {
    return (
        <div className={styles.FormControlStep}>
            <div className={styles.SmallInput}>
                <span className={styles.FirstInput}>
                    <Input text='Nome da Empresa' name='company_name' placeholder='Everest Studios' ClassName='SmallInput'
                     onChange={onChange} value={formData.company_name} />
                </span>
                <span>
                    <Input text='Segmento da Empresa' name='company_segment' placeholder='Software Development' ClassName='SmallInput'
                     onChange={onChange} value={formData.company_segment}  />
                </span>
            </div>

            <Input text='Slogan da Empresa' name='company_slogan' placeholder='Desbrave o Cume da Inovação com a Everest Studios'
             onChange={onChange} value={formData.company_slogan}  />

            <Input text='Objetivo da Empresa' name='company_goal' placeholder='Impulsionar a excelência tecnológica, transformando ideias em soluções revolucionárias.'
             onChange={onChange} value={formData.company_goal}  />

            <Input text='Público-alvo' name='target_audience' placeholder='Outras Empresas'
             onChange={onChange} value={formData.target_audience}  />

            <Input text='Por que os clientes devem escolher sua empresa?' name='reason_to_choose' placeholder='Pois trazemos inovação com velocidade'
             onChange={onChange} value={formData.reason_to_choose}  />

            <TextArea name='define_company' text='Defina seu Negócio' placeholder='Conta sobre sua empresa...' cols='70' rows='5'
             onChange={onChange} value={formData.define_company}  />
        </div>
    )
}
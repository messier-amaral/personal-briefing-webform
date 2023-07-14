import styles from './styles/stepPage.module.css';

// Components 
import Input from './Input';
import TextArea from './TextArea';

export default function StepThree() {
    return (
        <div className={styles.FormControlStep}>
            <div className={styles.SmallInput}>
                <span className={styles.FirstInput}>
                    <Input text='Nome do Representante' name='representant' ClassName='SmallInput'/>
                </span>
                <span>
                    <Input type='tel' text='Numero de Contato' name='number' ClassName='SmallInput'/>
                </span>
            </div>

            <Input type='email' text='Email de Contato' name='email' />
            <Input text='Onde a empresa está localizada?' name='address' />
            <Input text='Fora o projeto principal quais outros itens você deseja?' name='services_add' />
            <Input text='Qual é o orçamento disponível?' name='budget' />
            <Input text='Qual é a data limite para a conclusão do projeto?' name='deadline' />

            <TextArea text='Deixe uma mensagem rápida para mim' name='message' cols='70' rows='2'/>
        </div> 
    )
}
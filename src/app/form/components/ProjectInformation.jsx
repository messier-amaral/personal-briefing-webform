import styles from './styles/stepPage.module.css';

// Components
import Input from './Input';
import TextArea from './TextArea';

export default function StepTwo() {
    return (
        <div className={styles.FormControlStep}>
            <Input text='Quais cores você gostaria ver no projeto?' name='project_color' placeholder='Azul Claro' />
            <Input text='Quais elementos devem estar presentes no projeto?' name='project_element' placeholder='Monte Everest' />
            <Input text='Qual Serviço/Projeto você está buscando?' name='service_option' placeholder='Criação de Site' />
            <Input text='Qual sentimento ou emoção o projeto deve passar?' name='project_emotion' placeholder='Inovação e Poder' />
            <Input text='Você tem referencias visual ou do estilo?' name='project_visual' placeholder='Atlassian' />
            <Input text='Existe algum requisito técnico importante para o projeto?' name='project_requisite' placeholder='Ser feito em Next.js' />
            <Input text='Alguma informação adicional revelante para o projeto?' name='project_information' placeholder='' />
        </div>
    )
}
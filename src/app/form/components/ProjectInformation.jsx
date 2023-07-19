import styles from './styles/stepPage.module.css';

// Components
import Input from './Input';

export default function StepTwo({ onChange, formData}) {
    return (
        <div className={styles.FormControlStep}>
            <Input text='Quais cores você gostaria ver no projeto?' name='project_color' placeholder='Azul Claro'
             onChange={onChange} value={formData.project_color} />
             
            <Input text='Quais elementos devem estar presentes no projeto?' name='project_element' placeholder='Monte Everest'
             onChange={onChange} value={formData.project_element} />

            <Input text='Qual Serviço/Projeto você está buscando?' name='service_option' placeholder='Criação de Site'
             onChange={onChange} value={formData.service_option} />

            <Input text='Qual sentimento ou emoção o projeto deve passar?' name='project_emotion' placeholder='Inovação e Poder'
             onChange={onChange} value={formData.project_emotion} />

            <Input text='Você tem referencias visual ou do estilo?' name='project_visual' placeholder='Atlassian'
             onChange={onChange} value={formData.project_visual} />

            <Input text='Existe algum requisito técnico importante para o projeto?' name='project_requisite' placeholder='Ser feito em Next.js'
             onChange={onChange} value={formData.project_requisite} />

            <Input text='Alguma informação adicional revelante para o projeto?' name='project_information' placeholder=''
             onChange={onChange} value={formData.project_information} />
        </div>
    )
}
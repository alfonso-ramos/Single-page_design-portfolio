import '../styles/Components/ConsultationButton.scss'

const ConsultationButton = (props) => {
    return (
        <div className='ConsultationButton'>
            <a className={props.variant} href="#">
                Free Consultation
            </a>
        </div>
    )
}

export default ConsultationButton

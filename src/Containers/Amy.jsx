import AmyImg from '../assets/image-amy.webp'
import ConsultationButton from '../Components/ConsultationButton'

const Amy = () => {
    return (
        <>
            <img className='Amy_image' src={AmyImg} alt="" />
            <h3>
            I’m Amy, and I’d love to work on your next project
            </h3>
            <p>
            I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!
            </p>
            <ConsultationButton />
        </>
    )
}

export default Amy

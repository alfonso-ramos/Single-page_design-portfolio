import ConsultationButton from "../Components/ConsultationButton"
import HomeButton from "../Components/HomeButton"

import '../styles/Containers/Header.scss'

const Header = () => {
    return (
        <div className="Header">
        
        <HomeButton/>
        <ConsultationButton
            variant={'primary'}
        />
        </div>
    )
}

export default Header

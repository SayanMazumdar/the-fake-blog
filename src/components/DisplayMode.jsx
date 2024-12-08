import { usePostContext } from '../ContextProvider'
import day_mode from '../assets/day-mode.png'
import night_mode from '../assets/night-mode.png'

export default function DisplayMode() {

    const { darkMode, setDarkMode } = usePostContext();

    return (
        <div className='displayMode' role='button' onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode ? day_mode : night_mode} alt="" />
        </div>
    )
}

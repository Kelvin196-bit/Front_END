import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';
import { Link } from 'react-router-dom';

export default function Logo({ type }) {

    const handleClick = () => window.scrollTo(0, 0);

    const logoSrc = type === 'logoHeader' ? logoHeader : logoFooter;

    return (
        <div>
            <Link to="/" onClick={handleClick}>
                <img src={logoSrc} alt="Logo" />
            </Link>
        </div>
    );
}

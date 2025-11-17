import React from 'react'
import { GoBackButton } from '../ui/GoBackButton'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import email from '../../assets/icons/email.svg'

export const Footer = () => {
    const redes = [
        { icon: github, red: 'GitHub', link: 'https://github.com/JesusASalazar' },
        { icon: linkedin, red: 'LinkedIn', link: 'https://www.linkedin.com/in/jes%C3%BAs-a-gom-sal' },
    ]

    return (
        <footer>
            <div className="footer-info">
                <p>&copy; Jesús A. Gómez Salazar.</p>
            </div>

            <div className="social-links">
                {redes.map(({ icon, red, link }, idx) => (
                    <a
                        key={idx}
                        href={link}
                        className="social-link">

                        <img src={icon} alt={red} />
                        <div>{red}</div>
                    </a>
                ))}
                <div className="social-link">
                        <img src={email} alt='email' />
                        <div>jgomsal924@g.educaand.es</div>
                </div>
            </div>
        </footer>
    )
}
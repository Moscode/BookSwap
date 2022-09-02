import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer__logo'>
            <h1>Pair</h1>
        </div>
        <div className='footer__product'>
            <h4>PRODUCT</h4>
            <ul>
                <li>Pair Programming Platform</li>
            </ul>
        </div>
        <div className='footer__developers'>
            <h4>DEVELOPERS</h4>
            <ul>
                <li>How we work?</li>
                <li>API integration</li>
            </ul>
        </div>
        <div className='footer__help'>
            <h4>HELP</h4>
            <ul>
                <li>Support/Bug report</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='footer__social'>
            <h4>SOCIALS</h4>
            <ul>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>Telegram</li>
            </ul>
        </div>
        <div className='footer__legal'>
            <h4>LEGAL</h4>
            <ul>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Legal Notice</li>
            </ul>
        </div>
    </div>
    <div>
        <p style={{textAlign: 'center', color: 'rgba(75, 75, 75, 0.438)'}}>Copy &copy; PairProgram 2022</p>
    </div>
    </>
  )
}

export default Footer;

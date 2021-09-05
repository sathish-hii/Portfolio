import React from 'react'
import "./Contact.css"
import { Element } from 'react-scroll'
import { IconButton } from '@material-ui/core'
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons'
const Contact = () => {
    return (
        <div>
            <Element  className="contact">
                <h2>CONTACT</h2>
                <div className="contact_content">
                    <p>
                    Email : <span>sathishkumar040400@gmail.com</span>
                    </p>
                    <div className="contact_icons">
                        <a href="https://www.linkedin.com/in/sathish-kumar-41825a190">
                            <IconButton>
                                <LinkedIn/>
                            </IconButton>
                        </a>
                        <a href="https://www.instagram.com/sathish_sk_04">
                            <IconButton>
                                <Instagram/>
                            </IconButton>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100017108648191">
                            <IconButton>
                                <Facebook/>
                            </IconButton>
                        </a>
                    </div>
                </div>
            </Element>
        </div>
    )
}

export default Contact

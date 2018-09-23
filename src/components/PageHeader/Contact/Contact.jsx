import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css';

const PageHeaderContact = () => (
    <div className="PageHeaderContact">
<FontAwesomeIcon icon={['fab','facebook']} />
      <FontAwesomeIcon icon={['fab','linkedin']} />
      <FontAwesomeIcon icon={['fab','github']} />
      <FontAwesomeIcon icon={['fab','skype']} />
      <FontAwesomeIcon icon="envelope" />
   
    </div>
)
export default PageHeaderContact;
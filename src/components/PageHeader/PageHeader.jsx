import React from 'react';
import PageHeaderBranding from './Branding/Branding';
import PageHeaderContact from './Contact/Contact';
import './PageHeader.css';


const PageHeader = () => (
  <header className="PageHeader">
    <PageHeaderBranding />
    <PageHeaderContact />
  </header>
)
export default PageHeader;

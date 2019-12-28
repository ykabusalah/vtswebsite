import React from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '@iso/config/site.config';
import Logo from '../../assets/images/logo/vcs-logo-full-transparent-white-sm.png'
import LogoSmall from '../../assets/images/logo/vcs-logo-transparent-white-sm.png'

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
        <div>
          <h3>
            <Link to="/">
              {collapsed ? (
                <img className={siteConfig.siteIcon} src={LogoSmall} className={'siteLogoCollapsed'} />
              ) : (
                <img className={siteConfig.siteIcon} src={Logo} className={'siteLogo'} />
              )}
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) =><nav className='nav-wrapped  light-blue darken-3' >
<a href='#!' className='brand-logo center'>{titulo}</a>
</nav>
   

 Header.protoType={
     titulo:PropTypes.string.isRequired
 }
export default Header;
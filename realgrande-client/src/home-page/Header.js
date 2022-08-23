import React from 'react';

function Header(props) {
    return (
        <div>
            <div class='container'>
                <div className='row'>
                    <div className='col-md-5' > 
                     <a href="/">
                        <img  class="logo" src='./logo.png' alt='logo here'/>
                        </a>
                    </div>
                    <div className='col-md-7 mt-5 subtitle' > Find your dream house with us! 
                    <br/>
                    <a href="/signup"> SignUp </a> and 
                        <a href="/login"> Login </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
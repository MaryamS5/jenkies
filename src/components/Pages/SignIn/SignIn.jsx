
import React, { useState } from 'react';
import LogInPage from '../../Auth/LogInPage/LogInPage';
import SignUpPage from '../../Auth/SignUpPage/SignUpPage';
import FooterSection from '../../Home/FooterSection/FooterSection';

function SignIn() {
    const [isLogin, setIsLogin] = useState(true);
    const [users, setUsers] = useState([]);
  
  return (
    <div>
     
      <div
        
      >
         {isLogin ? (
          <LogInPage users={users} setIsLogin={setIsLogin} />
        ) : (
          < SignUpPage users={users} setUsers={setUsers} setIsLogin={setIsLogin} />
        )}
      
      </div>

      {/* Footer */}
      <div >
        <FooterSection />
      </div>
    </div>
  );
}

export default SignIn;

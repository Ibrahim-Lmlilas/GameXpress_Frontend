import { useState } from 'react';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import { AuthProvider } from './contexts/AuthContext';

function App() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <AuthProvider>
            <div className="min-h-screen bg-gray-50">
                {isLogin ? (
                    <Login onSwitchToRegister={() => setIsLogin(false)} />
                ) : (
                    <Register onSwitchToLogin={() => setIsLogin(true)} />
                )}
            </div>
        </AuthProvider>
    );
}

export default App;

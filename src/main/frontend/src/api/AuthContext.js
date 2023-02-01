import { useState, createContext, useContext } from "react";
import { apiClient, executeJwtAuthentication } from "./AuthenticationService";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)

  async function login(username, password) {
    try {
      const response = await executeJwtAuthentication(username, password);
      if (response.status === 200) {
        const jwtToken = `Bearer ${response.data.token}`;        
        setIsAuthenticated(true)        

       apiClient.interceptors.request.use(
            (config) => {               
                config.headers.Authorization = jwtToken
                return config
            }
        )
        console.log(response)
        return true;
      } else {       
        logout();
        return false;
      }
    } catch {
      logout();
      return false;
    }
  }
  function logout() {
    setIsAuthenticated(false);
    setUser(null) 
    delete apiClient.defaults.headers.common["Authorization"] 
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

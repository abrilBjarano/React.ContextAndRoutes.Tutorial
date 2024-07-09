import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser }  = useContext( UserContext );

    const onSetUser = () => {
      setUser({
        id: 123,
        name: 'Liss',
        mail: 'liss@gmail.com'
      });
    };

    return (
      <>
        <h1>LoginPage</h1>
        <hr />

        <pre>{ JSON.stringify( user, null, 4 ) }</pre>

        <button 
          className="btn btn-primary"
          onClick={ onSetUser }>
          Set user
        </button>
      </>
    )
 }
 
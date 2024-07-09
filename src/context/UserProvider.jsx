import { UserContext } from './UserContext';

const user = {
   id: 123,
   name: 'Abril',
   mail: 'abril@gmail.com'
}

export const UserProvider = ({ children }) => {

   return (
      // Ese value, es la infomarción que es la que va a estar en el lugar centralizado para compartir con los demás componentes que requieran esa info. En este caso, la información es el user.
      <UserContext.Provider value={{ user }}>
         { children }
      </UserContext.Provider>
   )
}

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const ProtectecdRoute = (props) => {
    let Component = props.Component;
    const navigate = useNavigate();

   useEffect(() => {
    if (!localStorage.getItem("idToken")) {
        navigate('/login');
    }
   }, [])
   return (
        <div>
            <Component/>
        </div>
   );
}
import "../styles/login.css";
import logoConecta from "../assets/logo-app.png";
import { useState } from "react";

 function validateEmail(email){
    const cleanEmail = email.trim();
        if(cleanEmail.trim() === "") {
            return "El correo electrónico es obligatorio";
        }
        return "";
    }

    function validatePassword(password){
        if(password.trim() === ""){
            return "La contraseña es obligatoria"
        }else if(password.length<5){
            return "La contraseña debe tener al menos 5 caracteres"
        }
        return "";
    }

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


   function handleEmailChange(event) {

    const newEmail = event.target.value;

    setEmail(newEmail);

    if(emailError) {
        setEmailError(validateEmail(newEmail));
    }
   }

   function handlePasswordChange(event) {

    const newPassword = event.target.value;

    setPassword(newPassword);

    if(passwordError){
        setPasswordError(validatePassword(newPassword));
    }
   }

    function handleSubmit(event){

       
        event.preventDefault();

      const newEmailError = validateEmail(email);
      const newPasswordError = validatePassword(password);

      setEmailError(newEmailError);
      setPasswordError(newPasswordError);

        if (newEmailError || newPasswordError) {
            return;
        }

        console.log("Formulario válido");

    }

    return(
        <main className="login-page">

            <section className="login-card">

                <img
                src={logoConecta}
                alt= "Logo Conecta Voluntariado"
                className="login-logo"
                />

                <h1>Conecta Voluntariado</h1>

                <p className="login-subtitle-first">
                    ¿Te apasiona el mundo del voluntariado? 
                </p>

                <p className="login-subtitle-second">
                    Encuentra proyectos que te importan y deja huella en el mundo
                </p>

                    <form className="login-form"
                    onSubmit={handleSubmit}
                    noValidate
                    >

                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>

                            <input
                                type="email"
                                id="email"
                                placeholder="correo@ejemplo.com"
                                value={email}
                                onChange={handleEmailChange}
                        
                            />
                            {emailError && (
                                <p className="error-message">
                                    {emailError}
                                </p>
                            )}


                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>

                            <input
                                type="password"
                                id="password"
                                placeholder="introduce tu contraseña"
                                value={password}
                                onChange={handlePasswordChange}
                            
                            />
                            {passwordError && (
                                <p className="error-message">
                                    {passwordError}
                                </p>
                            )}
                        </div>

                        <button type="submit">
                            Iniciar sesión
                        </button>

                    </form>

                    <p className="register-text">
                        ¿Aún no tienes cuenta? <a href="/register">Regístrate aquí</a>
                    </p>

            </section>

        </main>
    );
    
}
export default LoginPage;
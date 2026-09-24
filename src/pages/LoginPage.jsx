import "../styles/login.css";
import logoConecta from "../assets/login-logo.png";

function LoginPage() {

    return(
        <main className="login-page">

            <section className="login-card">

                <img
                src={logoConecta}
                alt= "Logo Conecta VOluntariado"
                className="login-logo"
                />

                <h1>Conecta Voluntariado</h1>

                <p className="login-subtitle-first">
                    ¿Te apasiona el mundo del voluntariado? 
                </p>

                <p className="login-subtitle-second">
                    Encuentra proyectos que te importan y deja huella en el mundo
                </p>

                    <form className="login-form">

                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>

                            <input
                                type="email"
                                id="email"
                                placeholder="correo@ejemplo.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>

                            <input
                                type="password"
                                id="password"
                                placeholder="introduce tu contraseña"
                            />
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
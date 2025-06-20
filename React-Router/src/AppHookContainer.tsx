import App from "./App";
import { AppRouter } from "./AppRouter";
/*Aca se pueden agregar otros componentes como proveedores de contexto */
export const AppHookContainer = () => {
    return (
        <App>
            <AppRouter />
        </App>

    );
}
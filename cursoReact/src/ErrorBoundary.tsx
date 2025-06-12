import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;

}

interface ErrorBoundaryProps {
    children: ReactNode;
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        // Actualiza el estado para que el siguiente renderizado muestre la UI de reserva
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Puedes registrar el error en un servicio de reporte de errores
        console.error("Error capturado por ErrorBoundary:", error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // Puedes renderizar cualquier UI personalizada de reserva
            return <h1>Algo salió mal.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
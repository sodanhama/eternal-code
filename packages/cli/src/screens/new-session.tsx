import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ErrorMessage } from '../components/messages';

export function NewSession() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const state = location.state as {message?: string} | null;

    useEffect(() => {
        if (!state?.message) {
            navigate("/", { replace: true });
        }
    }, [navigate, state])

    if (!state?.message) return null;

    return (
        <box flexGrow={1} flexDirection="column" padding={2} gap={1}>
            <text>Creating session...</text>
            <text>{state.message}</text>
            <ErrorMessage message="Oops!"/>
        </box>
    )
}
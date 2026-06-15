import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ErrorMessage, UserMessage, BotMessage } from '../components/messages';
import { SessionShell } from '../components/sessions-shell';

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
        <SessionShell onSubmit={()=>{}} inputDisabled loading>
            <UserMessage message={state.message} />
            <BotMessage content="This is a sample response." model="opus-4-6"/>
            <ErrorMessage message="This is a sample error message." />
        </SessionShell>
    )
}
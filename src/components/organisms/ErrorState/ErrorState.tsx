import { Button } from '../../atoms/Button/Button';

export interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  message = "We couldn't connect to the server (API error). Please try again in a few moments.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="error-state">
      <div className="error-state__icon">🚫</div>
      <h2 className="error-state__title">Something went wrong</h2>
      <p className="error-state__message">{message}</p>
      {onRetry && (
        <div className="error-state__action">
          <Button text="↻ Retry" variant="secondary" onClick={onRetry} />
        </div>
      )}
    </div>
  );
}

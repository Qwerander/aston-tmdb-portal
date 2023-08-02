import { Component } from 'react';
import { ErrorInfo, ReactNode } from 'react';
import styles from './errorBoundary.module.css';

interface State {
  isError: boolean;
  error: null | Error
}

interface Props {
  children: ReactNode;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { isError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error.message, errorInfo.componentStack);
  }

  render() {
    const { isError, error } = this.state;
    const { children } = this.props;
    
    const content = isError ? (
      <div className={styles.error}>
        Упс... Что-то пошло не так. <br />
        {error?.message}
        </div>
    ) : (
      children
    );

    return content;
  }
}

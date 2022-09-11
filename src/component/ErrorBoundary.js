import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // It will catch error in any component below. We can also log the error to an error reporting service.
    // logErrorToMyService(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className='container'>
          <div variant='h5' className='text-center' component='h2'>
            Something went worng
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

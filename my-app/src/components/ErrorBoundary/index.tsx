import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if ((this.state as {
      hasError: boolean
    }).hasError) {
      return <h1>Something went wrong.</h1>
    }

    return (this.props as {
      children: React.ReactNode
    }).children
  }
}

export default ErrorBoundary

// <ErrorBoundary>
//   <MyWidget />
// </ErrorBoundary>

import React, { Component, ComponentType } from 'react';

const withTimestamp = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return class extends Component<P> {
    componentDidUpdate(prevProps: P) {
      console.log(`Component updated at: ${new Date().toISOString()}`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withTimestamp;

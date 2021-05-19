import * as React from 'react';
import Snackbar from '../../components/Snackbar';

export default function withSnackbar(WrappedComponent: React.ComponentType) {
  return function () {
    return (
      <>
        <WrappedComponent />
        <Snackbar />
      </>
    );
  }
};
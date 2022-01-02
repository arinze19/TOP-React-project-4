const errorMessage = (code) => {
    switch (code) {
      case 401: 
        return 'Ooops, looks like you may have forgotten your password or email maybe'
      case 404:
        return 'Sorry looks like you do not have an account with us';
      case 409:
        return 'Oops, looks like you already have an account with us';
      default:
        break;
    }
  };


export default errorMessage;

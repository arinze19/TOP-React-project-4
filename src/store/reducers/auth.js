export const signIn = (state, { token, user }) => ({ ...state, user, token, isloggedIn: true }) 
export const signUp = (state, { token, user }) => ({ ...state, user, token, isLoggedIn: true })  // modify to make sure user can't sign up without verifying mail?
export const logOut = (state) => ({ ...state, isLoggedIn: false, user: {}, token: null })
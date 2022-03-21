export const signIn = (state, { token, user }) => ({ ...state, user, token }) 
export const signUp = (state, { token, user }) => ({ ...state, user, token })  // modify to make sure user can't sign up without verifying mail?
export const logOut = (state) => ({ ...state, user: {}, token: null })
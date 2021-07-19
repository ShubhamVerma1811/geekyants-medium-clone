import firebase from '../configs/firebase/init'

const handleSignUp = async (email, password, name, username) => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    console.log(user)

    const res = await firebase
      .firestore()
      .collection('users')
      .doc(user?.uid)
      .set({
        email,
        username,
        name,
        createdAt: firebase.firestore.Timestamp.now(),
      })
    console.log(res)
  } catch (err) {
    console.error('FB Signup Error', err)
  }
}

const handleSignIn = async (email: string, password) => {
  try {
    const { user } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    const authUser = await (
      await firebase.firestore().collection('users').doc(user.uid).get()
    ).data()

    return { ...authUser, uid: user?.uid, isAuthed: true }
  } catch (err) {
    console.error('FB LogIn Error', err)
  }
}

const handleSignOut = async () => {
  try {
    const resp = await firebase.auth().signOut()
    console.log(resp)
    return resp
  } catch (err) {
    console.error('FB Signout Error', err)
  }
}

export { handleSignUp, handleSignIn, handleSignOut }

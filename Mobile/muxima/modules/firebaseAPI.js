import * as firebase from 'firebase'

export const createUser = (email, password) => {
	console.log('CreateUser has been called.')

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => console.log('createUser error: ', error));
}


// export async function signInGoogle() {
// export const signInGoogle = () => {
// 	try {
// 		console.log("teste")
// 		// GoogleSignin.configure();
// 	  	// const data = GoogleSignin.signIn();
// 	  	// const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
// 	  	// const firebaseUserCredential = firebase.auth().signInWithCredential(credential);
// 	  	// console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
// 	} catch (e) {
// 	  	console.error(e);
// 	}
//   }

// export async function signInGoogle () {
// 	try {
// 		await GoogleSignIn.askForPlayServicesAsync();
// 		const { type, user } = await GoogleSignIn.signInAsync();
// 		if(type === 'sucess'){
// 			console("YEAH");
// 		}
// 	} catch (error) {
// 		console.error(error);
// 	  }
// }

export const signInUser = (email, password) => {
	firebase.auth().signInWithEmailAndPassword(email, password)
		.catch((error) => console.log('createUser error: ', error));
}

export const logoutUser = () => {
	firebase.auth().signOut();
}
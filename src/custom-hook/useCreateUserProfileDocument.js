const { useEffect } = require("react")
const { auth, firestore, timestamp } = require("../firebase/firebase.utils")

const useCreateUserProfileDocument = async (currentUser, additionalData) => {
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                try {
                    // firestore.collection('users').doc(user.uid).add({
                    //     email: user.email,
                    //     displayName: user.displayName,
                    //     createdAt: timestamp,
                    //     ...additionalData
                    // })
                    console.log(user)
                } catch (err) {
                    console.log('error while creating user profile document', err.message)
                }
            }
        })
    }, [])
}

export default useCreateUserProfileDocument
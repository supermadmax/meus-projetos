import firebase from '../FirebaseInit'


export const getContactList = ()=>{
    return (dispatch)=>{

        firebase.database().ref('users').once('value')
            .then((snapshot)=>{
                let users = []
                snapshot.forEach((childItem)=>{
                    users.push({
                        key: childItem.key,
                        name: childItem.val().name
                    })
                })

                dispatch({
                    type: 'setContactList',
                    payload: {
                        users: users
                    }
                })


            })
        }
    }






// export const signInAction = (email, password)=>{
//     return (dispatch) => {
//         firebase.auth().signInWithEmailAndPassword(email, password)
//             .then((user)=>{
//
//                 let uid = firebase.auth().currentUser.uid
//
//                 dispatch({
//                     type: 'changeUid',
//                     payload: {
//                         uid: uid
//                     }
//                 })
//             })
//             .catch((error)=>{
//                 switch (error.code) {
//                     case 'auth/invalid-email':
//                         alert ('Email inválido')
//                         break
//                     case 'auth/user-disabled':
//                         alert ('Seu usuário está desativado')
//                         break
//                     case 'auth/user-not-found':
//                         alert ('Não existe o usuário')
//                         break
//                     case 'auth/wrong-password':
//                         alert ('E-mail e/ou senha inválido')
//                         break
//                 }
//             })
//     }
// }


// export const changeName = (name)=>{
//     return{
//         type: 'changeName',
//         payload: {
//             name: name
//         }
//     }
//
// }

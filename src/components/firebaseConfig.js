import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyA07qQzrOA2PX9PYuu-KWzDi1nFE4LvwGU",
  authDomain: "shockralistatarefa.firebaseapp.com",
  projectId: "shockralistatarefa",
  storageBucket: "shockralistatarefa.appspot.com",
  messagingSenderId: "398352854588",
  databaseURL: "https://shockralistatarefa-default-rtdb.firebaseio.com/",
  appId: "1:398352854588:web:06dc4b480c3427f43b5d39",
  measurementId: "G-R5FCGFVF22"
};

//login 
//usuário: meu email
//senha: 123teste

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

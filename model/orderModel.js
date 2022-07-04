import { firebase, auth, db } from '../firebase'
import { ShowToast } from '../help/showToast';

const orderModel = {
    addOrder: async (params) => {
        const {uid, name, phone, address, createdAt, total, cartItems} = params
        db.collection("order").add({
            uid: uid,
            name: name,
            phone: phone,
            address: address,
            createdAt: createdAt,
            total: total,
            cartItems: cartItems,
            status: 'confirmed'
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
    
    },
    getOrder: async (uid,setDataOrder) => {
        const productOrder = db.collection("order").where('uid', '==', uid).onSnapshot((querySnapshot) => setDataOrder(
            querySnapshot.docs.map(doc => ({
                uid: doc.data().uid,
                id: doc.data().id,
                name: doc.data().name,
                phone: doc.data().phone,
                address: doc.data().address,
                createdAt: doc.data().createdAt.toDate(),
                total: doc.data().total,
                cartItems: doc.data().cartItems
            }))
        ))
        return productOrder
    }
}

export default orderModel
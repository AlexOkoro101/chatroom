import { ref, watchEffect } from "vue"
import { projectFirestore } from "../firebase/config"

const getCollection = (collection) => {
    const document = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

    const sub = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach((doc) => {
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        })
        document.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        document.value = null
        error.value = 'Could not fetch data'
    })

    watchEffect((onInvalidate) => {
        //unsubscribe from real-time snapshot
        onInvalidate(() => sub())
    })

    return {document, error}
}

export default getCollection
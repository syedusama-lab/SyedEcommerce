import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../firebase-config'

const Aboutus = () => {
    const docRef = doc(db,"users","885WEZ7Ieu30i9VBE5zm")
    const getData = async ()=>{
        const docSnap = await getDoc(docRef)
        console.log(docSnap.data())
    }
    useEffect(()=>{getData()},[])


    
  return (
    <div>Aboutus</div>
  )
}

export default Aboutus
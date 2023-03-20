import { useState, useEffect } from 'react';
import { Text, View, FlatList,Modal,StyleSheet } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import NotesModal from './notesModal';
import Ionicons from '@expo/vector-icons/Ionicons';
import uuid from 'react-native-uuid';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../utils/firebaseConfig';


export default function NotesList() {
    const [notes, setNotes] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedID, setSelectedID] = useState()

    useEffect(() => {
        const unsub = onSnapshot(collection(db,'notes'), (snapshot) => {
            const noteData = snapshot.docs.map(doc => ({...doc.data(),id:doc.id}))
            setNotes(noteData)
        })
        return unsub
    }, []);

    async function deleteNote(id){
        // const newState = notes.filter(note => note.id !== id)
        // setNotes(newState)

        
        const docRef = doc(db, 'notes',id)
        await deleteDoc(docRef)
    }

    async function addNote(){
        const newNote = {
                            title: 'No Title',
                            tag: '-',
                            details: 'No description just yet',
                        }
        const newState = [...notes,newNote]
        setNotes(newState)
        
        const collectionRef = collection(db, 'notes')
        await addDoc(collectionRef,newNote)
    }

    //Do tags on a later date
    return (
        <>
            
            <View className="flex-1 items-left justify-center bg-black px-10 py-10">
                <FlatList
                    data={notes}
                    renderItem={({item}) => (
                        <Pressable onPress={() => (setShowModal(true),setSelectedID(item.id))}>
                            <View className="bg-[#171717] px-3 py-2 mb-3 pl-5 rounded" style={styles.whiteShadow}>
                                <Text className="text-white text-lg" style={{fontFamily: 'Kanit_400Regular'}}>{item.title}</Text>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
            
            <NotesModal 
                showModal={showModal} setShowModal={setShowModal} 
                selectedID={selectedID} setSelectedID={setSelectedID} 
                notes={notes}  setNotes={setNotes}
                deleteNote={deleteNote}
            />

            <View className="absolute right-12 bottom-24">
                <Pressable onPress={()=>addNote()}>
                    <Ionicons name={'add-circle'} size={45} color='white' />
                </Pressable>
            </View>
            
        </>
    );
}

const styles = StyleSheet.create({
    whiteShadow: {
        shadowColor: '#FFF',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
    },
});
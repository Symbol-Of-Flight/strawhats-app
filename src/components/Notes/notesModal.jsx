import { useEffect, useState } from 'react';
import { Text, View, Modal, TextInput, Button,StyleSheet } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { collection, onSnapshot, setDoc, doc } from 'firebase/firestore';
import { db } from '../../../utils/firebaseConfig';

export default function NotesModal({selectedID, setSelectedID, showModal, setShowModal, notes, setNotes, deleteNote}) {
    const [displayNote, setDisplayNote] = useState()

    useEffect(() => {
        const selectedNote = notes.filter(note => note.id === selectedID)
        setDisplayNote(selectedNote[0])
    }, [selectedID,notes]);

    return (
        <>
            <Modal
                animationType="slide"
                //transparent={true}
                visible={showModal}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setShowModal(!modalVisible);
            }}>
                {displayNote &&
                    <View className="bg-black flex-1 flex-col">
                        <View className='px-10 py-8'>
                            {/* Touchwithoutfeedback */}
                            {/* text input with button to submit */}
                            <View className='flex-row justify-between mb-3 items-center'>
                                {/* another modal comes out to select from a list */}
                                <Pressable>
                                    <View className="bg-[#171717] py-0.5 px-3 rounded" style={styles.whiteShadow}>
                                        <Text className="text-white text-base" style={{fontFamily: 'Kanit_400Regular'}}>{displayNote.tag}</Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => (setShowModal(false),setSelectedID())}>
                                    <Text className="text-white text-sm" style={{fontFamily: 'Kanit_400Regular'}}>Close</Text>
                                </Pressable>
                            </View>

                            <NoteTitle displayNote={displayNote} notes={notes} setNotes={setNotes} selectedID={selectedID}/>

                            <NoteDetails displayNote={displayNote} notes={notes} setNotes={setNotes} selectedID={selectedID}/>


                            <View className='mt-20 pl-2 items-center'>
                                <Pressable onPress={() => (setShowModal(false),deleteNote(selectedID))} >
                                    <View className="bg-[#171717] py-2 px-8 rounded" style={styles.whiteShadow}>
                                        <Text className="text-white text-sm" style={{fontFamily: 'Kanit_400Regular'}}>Delete Note</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                }
            </Modal>
        </>
    );
}

function NoteTitle({displayNote, notes, setNotes, selectedID}){
    const [editTitle, setEditTitle] = useState(false)
    const [titleText, setTitleText] = useState(displayNote.title)

    async function updateTitle(){
        const selectedNote = notes.filter(note => note.id === selectedID)[0]
        const newNote = {
                            title: titleText,
                            tag: selectedNote.tag,
                            details: selectedNote.details
                        }
        const docRef = doc(db, 'notes', selectedID)
        await setDoc(docRef, newNote)
    }

    return(
        <View>
            {editTitle ? 
                <Pressable>
                    <TextInput
                        className="text-white text-xl border border-white pl-2"
                        style={{fontFamily: 'Kanit_400Regular'}}
                        onChangeText={setTitleText}
                        value={titleText}
                    />
                    <View className='mt-2'>
                        <Button
                            onPress={() => (setEditTitle(false),updateTitle())}
                            title="Submit"
                            className='bg-black mt-2'
                        />
                    </View>
                </Pressable>
            : 
                <Pressable onPress={() => setEditTitle(true)}>
                    <Text className="text-white text-xl pl-2" style={{fontFamily: 'Kanit_400Regular'}}>{displayNote.title}</Text>
                </Pressable>
            }

        </View>
    )
}

function NoteDetails({displayNote, notes, setNotes, selectedID}){
    const [editDetails, setEditDetails] = useState(false)
    const [detailsText, setDetailsText] = useState(displayNote.details)

    async function updateDetails(){
        const selectedNote = notes.filter(note => note.id === selectedID)[0]
        const newNote = {
            title: selectedNote.title,
            tag: selectedNote.tag,
            details: detailsText
        }
        const docRef = doc(db, 'notes', selectedID)
        await setDoc(docRef, newNote)
    }

    return(
        <View>
            {editDetails ? 
                <Pressable>
                    <TextInput
                        className="text-white text-base border border-white pl-2 mt-3 pt-1"
                        multiline
                        textAlignVertical='top'
                        numberOfLines={20}
                        style={{fontFamily: 'Kanit_400Regular'}}
                        onChangeText={setDetailsText}
                        value={detailsText}
                    />
                    <View className='mt-2'>
                        <Button
                            onPress={() => (setEditDetails(false),updateDetails())}
                            title="Submit"
                            className='bg-black mt-2'
                        />
                    </View>
                </Pressable>
            : 
                <Pressable onPress={() => setEditDetails(true)}>
                    <Text className="text-white text-base mt-3 pl-2 pt-1" style={{fontFamily: 'Kanit_400Regular'}}>{displayNote.details}</Text>
                </Pressable>
            }

        </View>
    )
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

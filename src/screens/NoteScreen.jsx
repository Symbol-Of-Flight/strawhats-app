import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native'
import NotesHeader from '../components/Notes/notesHeader';
import NotesList from '../components/Notes/notesList';

export default function NoteScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#334155]">
      <StatusBar style="auto" />
      <NotesHeader/>
      <NotesList/>
    </SafeAreaView>
  );
}



import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://alukyyciqwgwrrpvskbt.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzA0MzQ2NCwiZXhwIjoxOTQyNjE5NDY0fQ.8pYrc9MCY_2T9q1Bh85ULfuVWrP8ItWmpGz-_pDMVag"

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
})

export default supabase
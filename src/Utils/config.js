import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yjayqpxpgosxopufsxfh.supabase.co";

const supabaseApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqYXlxcHhwZ29zeG9wdWZzeGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyODcwOTQsImV4cCI6MjA1OTg2MzA5NH0.Qs_hblS8LLObGbE4hgyAgJOKFBe1Se2gigGv0p1Q5uE";


  export const supabase = createClient(supabaseUrl, supabaseApiKey)


 export const getUsers = async ()=>{
    try {
      const { data, error } = await supabase.from("users").select();
      if (error) throw error;
      if (data) console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  
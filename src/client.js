import { createClient } from "@supabase/supabase-js";

const URL = "https://tuptafuscmziadjnlewq.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cHRhZnVzY216aWFkam5sZXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0OTY5NDMsImV4cCI6MjAwODA3Mjk0M30.pc7R7xrxxwS7DINtXhywv22NH9K-Qj8gOa6zHS6xb3Q";

export const supabase = createClient(URL, API_KEY);
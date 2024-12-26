/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zsimmkxiiejxzqkrlowc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzaW1ta3hpaWVqeHpxa3Jsb3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MzYwMDMsImV4cCI6MjA0OTAxMjAwM30.VOZk8TzBzR5IjjFcjwKBcPXrv6LT1zkELX9apepQ6EU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

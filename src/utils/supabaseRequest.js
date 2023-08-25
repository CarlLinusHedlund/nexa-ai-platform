import { supabaseClient } from "./supabaseClient";

export const getPosts = async ({ userId, token }) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
  return data;
};

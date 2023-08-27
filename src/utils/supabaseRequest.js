import { supabaseClient } from "./supabaseClient";

export const GetPosts = async ({ userId, token }) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", userId);
  if (error) throw new Error(error.message);
  return data;
};

// const interface = {
//   userId: string,
//   token: string,
//   content: string,
//   title: string,
// }

export const createPost = async ({ userId, token, content, title }) => {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("posts")
    .insert([{ user_id: userId, content, title }])
    .single();
  if (error) throw new Error(error.message);
  return data;
};

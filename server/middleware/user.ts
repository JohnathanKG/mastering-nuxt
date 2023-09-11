import { serverSupabaseUser } from "#supabase/server";

export default (async (event) => {
  const user = await serverSupabaseUser(event);
  event.context.user = user;
});
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://xvcpjnmmljuyotirdlwa.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2Y3Bqbm1tbGp1eW90aXJkbHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMjEzMzEsImV4cCI6MjA0NTY5NzMzMX0.zmwE9CftrUqn05SoXdIeaL_qcvO1RGNOXeufGn3fA5I';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      qnfixaenxzbdunlybfgh: string;
      sb_publishable_Od5loPap_HCzCynhz1OK5Q_46_Pde0p: string;
    }
  }
}

const supabaseUrl = process.env.qnfixaenxzbdunlybfgh!;
const supabaseAnonKey = process.env.sb_publishable_Od5loPap_HCzCynhz1OK5Q_46_Pde0p!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
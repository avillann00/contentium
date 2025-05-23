import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id?: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    is_pro?: boolean;
  }

  interface Session {
    user: {
      id?: string;
      email?: string | null;
      first_name?: string;
      last_name?: string;
      username?: string;
      is_pro?: boolean;
    };
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    id?: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    is_pro?: boolean;
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    id: string;
    first_name?: string;
    last_name?: string;
    username?: string;
    is_pro?: boolean;
  }
}


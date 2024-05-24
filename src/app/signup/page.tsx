"use client"
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function signup() {
    const {replace} = useRouter();

    const { status } = useSession()

    if(status === "authenticated"){
        replace("/");
    }

    async function authWith(provider: string) {
        try {
            await signIn(provider);


            console.log("Authentication successful!");
        } catch (error) {
            console.error("Authentication failed:", error);
        }
    }

    return(
        <div>
            <button onClick={() => authWith("google")}>
                signup with google
            </button>

            <button onClick={() => authWith("github")}>
                signup with github
            </button>
        </div>
    )
}
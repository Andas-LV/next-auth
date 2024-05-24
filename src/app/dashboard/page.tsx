"use client"
import { useSession } from "next-auth/react"

export default function Page() {
    const { data: session, status, update } = useSession()

    if (status === "authenticated") {
        return (
            <>
                <p>Signed in as {session?.user?.name}</p>

                <button onClick={() => update()}>Update</button>
            </>
        )
    }

    return <p>Updating...</p>
}

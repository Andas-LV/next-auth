"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

export default function LoginBtn() {
    const { data: session } = useSession()

    if (session) {
        const img = session.user?.image?.toString() ?? '';
        console.log(session)

        return (
            <>
                <Link href={"/dashboard"}>
                    dashboard
                </Link>

                <br/>

                <Image src={img} alt={"img"} width={100} height={100}/>
                Signed in as {session.user?.email} <br/>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <Link href={"signup"}>
                signup
            </Link>

            <br/>

            <Link href={"/dashboard"}>
                dashboard
            </Link>

            <br/>

            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

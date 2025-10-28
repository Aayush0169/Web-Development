import Link from "next/link"
export default function page(){
    return <div className="text-center mt-25">
        <h2>Users Name </h2>
        <div className="mt-10 ">
            <a href="/dashboard/users/1"><li className="mt2">User 1</li></a>
            <a href="/dashboard/users/2"><li className="mt2">User 2</li></a>
            <a href="/dashboard/users/3"><li className="mt2">User 3</li></a>
            <a href="/dashboard/users/4"><li className="mt2">User 4</li></a>
        </div>
    </div>
}
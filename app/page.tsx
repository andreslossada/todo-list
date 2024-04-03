import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="h-screen mx-auto flex  relative bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-black via-red-700 to-black">
      <div className=" h-[600px] w-[1000px]  grid gap-20 place-content-center absolute right-0 top-[25%] z-10 p-20">
        <h1 className="text-5xl text-center font-bold">ViewTasks</h1>
        <p className="text-md font-semibold drop-shadow-2xl p-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent">
          ViewTasks is your go-to task management app designed to streamline
          your productivity effortlessly. With its intuitive interface, you can
          easily list, organize, and prioritize your tasks for the day. Whether
          its for work, school, or personal errands, ViewTasks helps you stay on
          top of your responsibilities with customizable categories and
          reminders. Say goodbye to missed deadlines and hello to a more
          organized life with ViewTasks.
        </p>
        <div className="flex justify-center gap-10 ">
          <Link
            href="/sign-in"
            className="bg-black px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Log in
          </Link>
          <Link
            href="/sign-up"
            className="bg-black px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Sign in
          </Link>
        </div>
      </div>
      <Image
        src="/desktop-todo.webp"
        width={1000}
        height={1000}
        alt="Picture of the author"
        className="absolute   top-[20%] "
      />
      <Image
        src="/mobile-todo.webp"
        width={1000}
        height={1000}
        alt="Picture of the author"
        className="absolute   top-[20%] right-[30%]"
      />
    </div>
  );
}

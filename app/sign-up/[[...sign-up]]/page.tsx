import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen mx-auto grid place-content-center">
      <SignUp />
    </div>
  );
}

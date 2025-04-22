import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full bg-green-600">
      <div className="flex justify-center items-center min-h-screen">
        <SignUp forceRedirectUrl="/dashboard" />
      </div>
    </div>
  );
}

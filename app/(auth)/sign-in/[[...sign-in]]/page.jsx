import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full bg-green-600">
      <div className="flex justify-center items-center min-h-screen">
        <SignIn forceRedirectUrl="/dashboard" />
      </div>
    </div>
  );
}

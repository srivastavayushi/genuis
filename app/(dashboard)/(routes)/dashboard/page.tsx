import { UserButton } from "@clerk/nextjs";
export default function DashboardPage() {
  return (
    <div>
      <div>Dashboard Page (Protected)</div>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}
const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    <div className="flex flex-col  gap-4">
      <Tabs defaultValue="dashboard">
        <TabsList className="flex justify-start">
          <TabsTrigger value="dashboard">
            <Link href="/dashboard/admin">Dashboard</Link>
          </TabsTrigger>
          <TabsTrigger value="users">
            <Link href="/dashboard/admin/users">Users</Link>
          </TabsTrigger>
          <TabsTrigger value="providers">
            <Link href="/dashboard/admin/providers">Providers</Link>
          </TabsTrigger>
          <TabsTrigger value="inbox">
            <Link href="/dashboard/admin">Inbox</Link>
          </TabsTrigger>
          <TabsTrigger value="logging">
            <Link href="/dashboard/admin">Logs</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {children}
    </div>
  );
};

export default AdminDashboardLayout;

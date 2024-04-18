"use client";

import { adminOnly } from "@/actions/admin-only";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";

// import { useCurrentRole } from "@/hooks/use-current-role";

// const AdminPage = () => {
//   const role = useCurrentRole();
//   return <div>Current Role: {role}</div>;
// };

// export default AdminPage

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Call");
      } else {
        toast.error("Forbidden API Call");
      }
    });
  };

  const onServerActionClick = () => {
    adminOnly().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.success);
      }
    });
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole="ADMIN">
          <FormSuccess message="You are allowed to view this content" />
        </RoleGate>
        <RoleGate allowedRole="USER">
          <FormSuccess message="You are allowed to view this content" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-Only API Route</p>
          <Button onClick={onApiRouteClick}>Click to Test</Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-Only Server Action</p>
          <Button onClick={onServerActionClick}>Click to Test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;

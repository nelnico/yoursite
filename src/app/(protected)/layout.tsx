import { ProtectedNavbar } from "./components/protected-navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-y-10">
      <ProtectedNavbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;

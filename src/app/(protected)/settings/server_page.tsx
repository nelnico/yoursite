import { auth, signOut } from "@/auth";

const SettingsPage_Server = async () => {
  const session = await auth();
  return (
    <div>
      Session:{JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default SettingsPage_Server;

import { createUser } from "@/actions";
import { BUTTON_CONSTANTS } from "@/constants";

export default function SignUpPage() {
  return (
    <form action={createUser} className="space-y-4 p-6">
      <input name="name" placeholder="Name" className="input" />
      <input name="email" placeholder="Email" className="input" />
      <input
        name="password"
        placeholder="Password"
        type="password"
        className="input"
      />
      <button type="submit" className="btn btn-primary">
        {BUTTON_CONSTANTS.createAccount}
      </button>
    </form>
  );
}
